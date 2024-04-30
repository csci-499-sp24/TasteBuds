import { auth } from '../firebase/firebaseConfig'; 
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const CommentForm = ({ recipeId }) => {
  const [commentText, setCommentText] = useState('');
  const [userId, setUserId] = useState(null); // State to store the user ID

  useEffect(() => {
    // Get the currently logged-in user ID from your authentication system
    const fetchUserId = async () => {
      if (auth.currentUser) {
        setUserId(auth.currentUser.uid);
      }
    };

    fetchUserId();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Fetch the Firebase user ID of the currently logged-in from your authentication system
    const firebaseUserId = auth.currentUser ? auth.currentUser.uid : null;
    const recipeId = 13;
    try {
      // Get the JWT token from the authentication system
      const token = await auth.currentUser.getIdToken();
  
      // Make a POST request to your server to submit the comment
      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
        userId,
        recipeId,
        commentText,
        firebaseUserId,
      }, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in the request headers
        },
      });
  
      console.log('Comment submitted successfully:', response.data);
  
      // Reset the comment text after submission
      setCommentText('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };
  
  return (
    <div>
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Enter your comment"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
