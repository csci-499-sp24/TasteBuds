import psycopg2
import pandas as pd
import firebase_admin
from firebase_admin import credentials, firestore
from textblob import TextBlob
import os

# Initialize Firebase connection
def initialize_firebase():
    cred = credentials.Certificate('../firebase/serviceAccountKey.json')
    firebase_admin.initialize_app(cred)
    return firestore.client()

# Connect to PostgreSQL
def connect_postgres():
    conn = psycopg2.connect(
        host=os.getenv('DB_HOST'),
        database=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASS')
    )
    return conn

# Load data from sources
def load_data():
    db = initialize_firebase()
    conn = connect_postgres()

    # Fetch data from PostgreSQL
    query_recipes = 'SELECT "userId", "recipeId" AS "recipeId" FROM "savedRecipes";'
    saved_recipes = pd.read_sql_query(query_recipes, conn)
    
    query_comments = 'SELECT firebase_user_id AS "userId", comment_text, recipe_id AS "recipeId" FROM comments;'
    comments = pd.read_sql_query(query_comments, conn)

    # Fetching Firebase data
    user_data = []
    users_ref = db.collection('users')
    docs = users_ref.stream()
    for doc in docs:
        data = doc.to_dict()
        data['userId'] = doc.id
        user_data.append(data)

    firebase_df = pd.DataFrame(user_data)
    return comments, saved_recipes, firebase_df

# Preprocess data
def preprocess_data(comments, saved_recipes, firebase_df):
    # Handling comments
    comments['Type'] = 'Comment'
    comments['Content'] = comments.pop('comment_text')
    comments['sentiment'] = comments['Content'].apply(lambda text: TextBlob(text).sentiment.polarity)
    comments['sentiment'] = comments['sentiment'].apply(lambda polarity: 'positive' if polarity > 0 else 'neutral' if polarity == 0 else 'negative')
    comments['rating'] = comments['sentiment'].apply(lambda x: 1 if x == 'positive' else 0.5 if x == 'neutral' else 0)

    # Handling saved recipes
    saved_recipes['Type'] = 'Saved'
    saved_recipes['Content'] = ''
    saved_recipes['rating'] = 1

    # Merging Firebase data
    combined_df = pd.concat([comments, saved_recipes], ignore_index=True)
    combined_df = combined_df.merge(firebase_df, on='userId', how='outer')

    # Cleanup and reorder
    combined_df.drop(['email', 'fullName', 'profilePic'], axis=1, inplace=True)
    column_order = ['userId', 'username', 'recipeId', 'Type', 'Content', 'sentiment', 'rating', 'pantry', 'fridge']
    combined_df = combined_df[column_order] 

    return combined_df

if __name__ == "__main__":
    comments, saved_recipes, firebase_df = load_data()
    combined_df = preprocess_data(comments, saved_recipes, firebase_df)
    pd.set_option('display.max_columns', None)
    pd.set_option('display.max_rows', None)
    print(combined_df)
    print("Columns in the Combined DataFrame:", combined_df.columns)
