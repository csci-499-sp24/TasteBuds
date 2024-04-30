import { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase/firebaseConfig';

const CommentForm = ({ recipeId }) => {
  const [commentText, setCommentText] = useState('');
  const [userId, setUserId] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUserId = async () => {
      if (auth.currentUser) {
        setUserId(auth.currentUser.uid);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const recipeId = 13; // remove later 
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${recipeId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [recipeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firebaseUserId = auth.currentUser ? auth.currentUser.uid : null;
    const recipeId = 13; // remove later 

    try {
      const token = await auth.currentUser.getIdToken();

      const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments`, {
        userId,
        recipeId,
        commentText,
        firebaseUserId,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Comment submitted successfully:', response.data);

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
      
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.comment_text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentForm;
