from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
CORS(app)

model_path = './recommendation_model.pkl'
with open(model_path, 'rb') as f:
    model = pickle.load(f)

app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASS')}@{os.getenv('DB_HOST')}/{os.getenv('DB_NAME')}"
db = SQLAlchemy(app)

class Recipe(db.Model):
    __tablename__ = 'recipes'
    recipe_id = db.Column(db.Integer, primary_key=True) 

def get_recipe_ids():
    recipe_ids = [recipe.recipe_id for recipe in Recipe.query.limit(10).all()]  # Fetching recipe_id instead of id
    return recipe_ids

@app.route('/recommend', methods=['GET'])
def recommend():
    user_id = request.args.get('userId')
    recipe_ids = get_recipe_ids()
    recommendations = []
    
    for recipe_id in recipe_ids:
        prediction = model.predict(user_id, recipe_id).est
        recommendations.append({'recipeId': recipe_id, 'predictedRating': prediction})
    
    # sorted by predicted rating
    recommendations.sort(key=lambda x: x['predictedRating'], reverse=True)
    
    return jsonify(recommendations)

if __name__ == "__main__":
    app.run(debug=True)


