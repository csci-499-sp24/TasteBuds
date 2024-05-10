import { useEffect, useState } from "react"; 
import Link from "next/link";
import { Autocomplete, AutocompleteItem, Chip, Divider, Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Sidebar from "../components/sidebar";

function SearchByIngredient() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  const [fetchedIngredients, setFetchedIngredients] = useState([]);

  useEffect(() => {
    fetchIngredients();
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [ingredientList]);

  const fetchRecipes = async () => { // passes filter to fetchrecipes
    setIsLoading(true);
    try {
      const ingredientIds = ingredientList.map(ingredient => ingredient.ingredient_id);
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/searchByIngredients`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ingredientIds })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchIngredients = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + `/getAllIngredients`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      setFetchedIngredients(data);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveIngredient = (index) => {
    console.log("REMOVE");
    if (ingredientList.length === 1) {
      setIngredientList([]);
      return;
    }
    console.log(ingredientList[index]);
    const newList = [...ingredientList.slice(0, index), ...ingredientList.slice(index + 1)];
    setIngredientList(newList);
    return;
  }

  const handleIngredientSelect = async (ingredientId) => {
    const ingredient = fetchedIngredients.find(ingredient => ingredient.ingredient_id === parseInt(ingredientId));
    if (ingredient) {
      setIngredientList([...ingredientList, ingredient]);
    } else {
      return;
    }
  };

  //temporary card component
  const recipeCard = (recipe) => {
    console.log(recipe)
    return (
      <Card className="col-span-12 sm:col-span-4 h-[300px] ">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large absolute z-10" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}> {recipe.Recipe.title}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={recipe.Recipe.image}
        />
      </Card>
    );
  }

  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <Sidebar />
      <div className = "bg">
        <div className="flex justify-center mx-atuo">
          <div id="" className=" mt-20">
            <label htmlFor="search">Search Recipes</label>
            <Autocomplete
              label="Select an Ingredient"
              onSelectionChange={handleIngredientSelect}
            >
              {fetchedIngredients.map((ingredient) => (<AutocompleteItem key={ingredient.ingredient_id}>{ingredient.standard_name}</AutocompleteItem>))}
            </Autocomplete>
            <div className="flex gap-4 h-[20px] mt-3">
              {ingredientList &&
                ingredientList.map((ingredient, index) => (
                  <Chip key={index} onClose={() => handleRemoveIngredient(index)}>{ingredient.standard_name}</Chip>
                ))}
            </div>
            <Divider className="my-4" />
            <div className="justify-center flex mx-atuo" id="">
              <div className="mx-atuo">
                {searchResults.some(recipe => recipe.ingredients.length === ingredientList.length) && (
                  <div>
                    <div id="" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white">Recipes that include all ingredients</div>
                    <div style={{ maxHeight: '600px', overflowY: 'auto' }} className=" ">
                      <div className="grid lg:grid-cols-3 gap-5 h-auto ">
                        {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                          recipe.ingredients.length === ingredientList.length && (
                            <div key={recipe.id} className="col-span-1">
                              {recipeCard(recipe)}
                            </div>
                          )
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>



              {searchResults.some(recipe => recipe.ingredients.length < ingredientList.length && recipe.ingredients.length >= ingredientList.length / 2) && (
                <div className="">
                  <div id="" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white">Recipes that include Most ingredients</div>
                  <div style={{ maxHeight: '600px', overflowY: 'auto' }} className="">
                    <div className="grid lg:grid-cols-3 gap-5 h-auto ">
                      {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                        (recipe.ingredients.length < ingredientList.length && recipe.ingredients.length >= ingredientList.length / 2) && (
                          <div key={recipe.id} className="col-span-1">
                            {recipeCard(recipe)}
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="">
                {searchResults.some(recipe => recipe.ingredients.length < ingredientList.length / 2) && (
                  <div>
                    <div id="" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white ">Recipes that include Some ingredients</div>
                    <div style={{ maxHeight: '600px', overflowY: 'auto' }} className="">
                      <div className="grid lg:grid-cols-3 gap-5 h-auto ">
                        {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                          (recipe.ingredients.length < ingredientList.length / 2) && (
                            <div key={recipe.id} className="col-span-1">
                              {recipeCard(recipe)}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchByIngredient;
