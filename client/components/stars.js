import {useState} from 'react'

function Stars(){
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

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
                  onChange={() => setRating(currentRating)}
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