import { useEffect, useState } from "react"; 
import Link from "next/link";
import { Autocomplete, AutocompleteItem, Chip, Divider, Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import RecipeBox from '../components/RecipeBox';
import Sidebar from "../components/sidebar";
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/userAuthContext';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth } from '../firebase/firebaseConfig';

function SearchByIngredient() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  const [fetchedIngredients, setFetchedIngredients] = useState([]);
  const [pantryItems, setPantryItems] = useState([]);
  const [fridgeItems, setFridgeItems] = useState([]); 
  const router = useRouter();
  const { currentUser } = useAuth();
  const [userId, setUserId] = useState("");


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
  /*
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
  */

  const fetchPantry = async ()=>{
    if (!router.isReady) return;
    const db = getFirestore();
    const token = await auth.currentUser.getIdToken();
    setUserId(currentUser.uid);
    const userDocRef = doc(db, "users", currentUser.uid);

    getDoc(userDocRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();

        const pantryArray = typeof userData.pantry === 'string' ? userData.pantry.split(',') : [];
        setPantryItems(pantryArray);

        const fridgeArray = typeof userData.fridge === 'string' ? userData.fridge.split(',') : [];
        setFridgeItems(fridgeArray);
      }
    }).catch((error) => {
      console.error('Detailed error:', error);
      setError('An error occurred while fetching user data.');
    });
  }
  
  useEffect(() => {
    if (!currentUser) {
      return;
    }

    fetchPantry();

  }, [currentUser]);  

  const handlePantry = async () =>{
    if(pantryItems){
      const newList = [...ingredientList, ...pantryItems];
      setIngredientList(newList);
      console.log(newList);
    } else{
      alert("Pantry Empty!")
    }
  }

  return (
    <div style={{height: "100%"}}>
      <Sidebar />
      <div className = "bgi" style={{overflow: "hidden"}}>
        <div className="flex justify-center mx-atuo">
          <div id="" className=" mt-20" style={{maxWidth: "100%", marginTop: "5%"}}>
            <label htmlFor="search">Search Recipes</label>            
            <Autocomplete
              label="Select an Ingredient"
              className="custom-autocomplete"
              onSelectionChange={handleIngredientSelect}
            >
              {fetchedIngredients.map((ingredient) => (<AutocompleteItem key={ingredient.ingredient_id}>{ingredient.standard_name}</AutocompleteItem>))}
            </Autocomplete>
            <div className="flex gap-4 h-[20px] mt-3" style={{width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", position: "relative"}}>
              {ingredientList &&
                ingredientList.map((ingredient, index) => (
                  <Chip key={index} onClose={() => handleRemoveIngredient(index)} style={{position: "relative"}}>{ingredient.standard_name}</Chip>
                ))}
            </div>
            <div
            onClick={handlePantry} 
            style={{
              padding: "8px 16px",
              border: "none",
              borderRadius: "20px",
              color: "white",
              marginTop: "6%",
              textAlign: "center",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: "#FF9800",
              position: "relative"
            }}>
            Add Pantry Ingredients
            </div>
            <Divider className="my-4" />
            <div className="justify-center flex mx-atuo" id="" style={{height: "100vh", overflow: "auto"}}>
              <div className="mx-atuo">
                {searchResults.some(recipe => recipe.ingredients.length === ingredientList.length) && (
                  <div>
                    <div id="" className="bg-orange-200 rounded p-2 text-center font-bold text-lg border border-white">Recipes that include all ingredients</div>
                    <div style={{maxWidth: "33.33vw", display: "flex"}} className=" ">
                      <div className="grid lg:grid-cols-3 gap-5 h-auto " style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                        {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                          recipe.ingredients.length === ingredientList.length && (
                            <div key={recipe.id} className="col-span-1" style={{maxWidth: "33vw"}}>
                              <RecipeBox recipe={recipe.Recipe}/>
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
                  <div style={{maxWidth: "33.33vw", display: "flex"}} className="">
                    <div className="grid lg:grid-cols-3 gap-5 h-auto " style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                      {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                        (recipe.ingredients.length < ingredientList.length && recipe.ingredients.length >= ingredientList.length / 2) && (
                          <div key={recipe.id} className="col-span-1">
                            <RecipeBox recipe={recipe.Recipe} />
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
                    <div style={{maxWidth: "33.33vw", display: "flex"}} className="">
                      <div className="grid lg:grid-cols-3 gap-5 h-auto " style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                        {!isLoading && Array.isArray(searchResults) && searchResults.map(recipe => (
                          (recipe.ingredients.length < ingredientList.length / 2) && (
                            <div key={recipe.id} className="col-span-1" style={{maxWidth: "33vw"}}>
                              <RecipeBox recipe={recipe.Recipe}/>
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
