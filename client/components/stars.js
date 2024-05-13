import {useState} from 'react'
import { useAuth } from '../firebase/userAuthContext';
import { useRouter } from 'next/router';
//import id from '../pages/recipe/[id]';

function Stars(){ //getRating is passed from parent and gets the rating value
    const [rating, setRating] = useState(null)//rating is updated upon clicking in the stars popup window, so it should work?
    const [hover, setHover] = useState(null)
    const router = useRouter();
    // const { recipe_id } = router.query; //meant to get recipe id from the link; it should work?
    // const { currentUser } = useAuth(); //use Firebase auth to get user info (I need the uid to pass as firebase user id)
    // //This function is meant to update the ratings table with a new rating.
    // //Not sure if it is even supposed to be in here or another js file.
    // const updateRatings = async () => {
    //   try {
    //     //const token = await currentUser.getIdToken();
    //     if (currentUser.uid == null) {
    //       console.log("no user uid given")
    //       throw new Error('You are not logged in')
    //     }
    //     const response = await fetch(
    //       `${process.env.NEXT_PUBLIC_SERVER_URL}/add_rating?firebase_user_id=${currentUser.uid}recipe_id=${recipe_id}&rating=${rating}`
    //     );
    //     if (!response.ok) {
    //       throw new Error('Failed to update rating info');
    //     }
    //   } catch (error) {
    //     console.error("Error updating rating info:", error);
    //   }
    // }
    
    return (
        <div>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1
            return (
              <label className="starButtons" key={index}>
                <input
                  key={star}
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onChange={() => {
                    setRating(currentRating);
                    //getRating(currentRating);
                    //updateRatings()
                    //Commented out so it doesn't break existing code
                    //Tested it when uncommented it, it doesn't seem to do anything
                  }}
                />
                <span
                  className="star"
                  style={{
                    color:
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                  }}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733; 
                </span>
              </label>
            );
          })}
          <p className="display">Your rating is: {rating}</p>
        </div>
      );
}
export default Stars;