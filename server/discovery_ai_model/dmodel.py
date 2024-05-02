import psycopg2
import pandas as pd
import firebase_admin
from firebase_admin import credentials, firestore, initialize_app
import os

#Firebase connection
cred = credentials.Certificate('../firebase/serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

#PostgreSQL connection
DB_HOST = os.getenv('DB_HOST')
if DB_HOST is None:
    raise ValueError("DB_HOST is not set in the environment variables")
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASS')

conn = psycopg2.connect(
    host = DB_HOST,
    database= DB_NAME,
    user= DB_USER,
    password= DB_PASSWORD)

"""
Data Collection:
- Saved Recipes (postgres)
- Comments (postgres)
- Pantry Items (firebase)
- Fridge Items (firebase)

"""
# Query saved recipes and comments from PostgreSQL
query_recipes = 'SELECT * FROM "savedRecipes";'
query_comments = "SELECT * FROM comments;"
saved_recipes = pd.read_sql_query(query_recipes, conn)
comments = pd.read_sql_query(query_comments, conn)
data_list = []

# Fetch pantry and fridge items from Firebase
pantry_items = []
fridge_items = []
users_ref = db.collection('users')
docs = users_ref.stream()
for doc in docs:
    data = doc.to_dict()
    data['user_id'] = doc.id  # Store document ID as user_id
    data_list.append(data)
    username = data.get('username', 'default_username')
    pantry = data.get('pantry', '')
    if pantry:  
        pantry_list = pantry.split(',')  
        for item in pantry_list:
            pantry_items.append((username, item.strip()))
    fridge = data.get('fridge', '')
    if fridge:  
        fridge_list = fridge.split(',')  
        for item in fridge_list:
            fridge_items.append((username, item.strip()))


# Convert lists to DataFrame
df = pd.DataFrame(data_list)
pantry_df = pd.DataFrame(pantry_items, columns=['username', 'pantry_items'])
fridge_df = pd.DataFrame(fridge_items, columns=['username', 'fridge_items'])

"""
#This is to check
print(pantry_df)
print(fridge_df)
"""


# Combine data based on user_id
df['pantry'] = df['pantry'].apply(lambda x: ', '.join(x) if isinstance(x, list) else x)
df['fridge'] = df['fridge'].apply(lambda x: ', '.join(x) if isinstance(x, list) else x)

# Now, df contains both pantry and fridge data in the same DataFrame with user IDs
print(df[['user_id', 'username', 'pantry', 'fridge']])

"""
#Transform comments data so that they are organized as positive, neutral, or negative

"""
"""
Inspect data and preform exploratory analysis. Remove duplicate information 
"""
