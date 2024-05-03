from surprise import SVD, Dataset, Reader
from surprise.model_selection import cross_validate
from datap import load_data, preprocess_data
import pickle



df_comments, df_saved_recipes, firebase_df = load_data()
df = preprocess_data(df_comments, df_saved_recipes, firebase_df) 

reader = Reader(rating_scale=(0, 1)) 

data = Dataset.load_from_df(df[['userId', 'recipeId', 'rating']], reader)

algo = SVD()

results = cross_validate(algo, data, measures=['RMSE', 'MAE'], cv=3, verbose=True)

# Training
trainset = data.build_full_trainset()
algo.fit(trainset)

"""
#Predict individual users and recipes
user_id = '6Hxo0bSionYTr3TGMIdoQd3qZPh2'
recipe_id = '13'
rating_pred = algo.predict(user_id, recipe_id)

print(f'Predicted rating for user {user_id} on recipe {recipe_id} is {rating_pred.est}')
"""

#for deployment
with open('recommendation_model.pkl', 'wb') as f:
    pickle.dump(algo, f)

