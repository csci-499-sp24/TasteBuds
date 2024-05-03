import psycopg2
import pandas as pd
import firebase_admin
from firebase_admin import credentials, firestore
from textblob import TextBlob
import os

# Initialize Firebase
cred = credentials.Certificate('../firebase/serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# PostgreSQL connection setup
conn = psycopg2.connect(
    host=os.getenv('DB_HOST'),
    database=os.getenv('DB_NAME'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASS')
)

# Fetch data from PostgreSQL
query_recipes = 'SELECT "userId", "recipeId" AS "recipeId" FROM "savedRecipes";'
saved_recipes = pd.read_sql_query(query_recipes, conn)
saved_recipes['Type'] = 'Saved'
saved_recipes['Content'] = ''  # No content for saved recipes

query_comments = 'SELECT firebase_user_id AS "userId", comment_text, recipe_id AS "recipeId" FROM comments;'
comments = pd.read_sql_query(query_comments, conn)
comments['Type'] = 'Comment'
comments['Content'] = comments['comment_text']
comments.drop('comment_text', axis=1, inplace=True)  # We now use Content

# Sentiment analysis on comments
comments['sentiment'] = comments['Content'].apply(lambda text: TextBlob(text).sentiment.polarity)
comments['sentiment'] = comments['sentiment'].apply(lambda polarity: 'positive' if polarity > 0 else 'neutral' if polarity == 0 else 'negative')

# Fetching/Processing Firebase data
user_data = []
users_ref = db.collection('users')
docs = users_ref.stream()

for doc in docs:
    data = doc.to_dict()
    data['userId'] = doc.id
    user_data.append(data)

#Firebase data
firebase_df = pd.DataFrame(user_data)
firebase_df['pantry'] = firebase_df['pantry'].apply(lambda x: ', '.join(x) if isinstance(x, list) else x)
firebase_df['fridge'] = firebase_df['fridge'].apply(lambda x: ', '.join(x) if isinstance(x, list) else x)

#This ensures that all users are included
combined_df = comments.merge(saved_recipes, on=['userId', 'recipeId'], how='outer')

# Merge
combined_df = pd.concat([comments, saved_recipes], ignore_index=True)
combined_df = combined_df.merge(firebase_df, on='userId', how='outer') 

# Cleaning up columns we don't need anymore
combined_df.drop(['email', 'fullName', 'profilePic' ], axis=1, inplace=True)

# Reordering columns as specified
column_order = [ 'userId', 'username', 'recipeId', 'Type', 'Content', 'sentiment', 'pantry', 'fridge']
combined_df = combined_df[column_order]  

pd.set_option('display.max_columns', None)  
pd.set_option('display.max_rows', None)     
pd.set_option('display.max_colwidth', None) 
pd.set_option('display.width', None)        

print(combined_df)
print("Columns in the Combined DataFrame:", combined_df.columns)

