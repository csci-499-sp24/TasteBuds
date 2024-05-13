import { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase/firebaseConfig';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useAuth } from '../firebase/userAuthContext';


const CommentForm = ({ recipeId }) => {
  const [commentText, setCommentText] = useState('');
  const [userId, setUserId] = useState(null);
  const [comments, setComments] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser.uid);
    } else {
      setUserId(null);
    }
  }, [currentUser]);
  

  useEffect(() => {
    const fetchComments = async () => {
      try {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${recipeId}`);
          const commentsWithUserData = await Promise.all(response.data.map(async (comment) => {
            const userData = await fetchUserData(comment.firebase_user_id);
            console.log("firebase_user_id:",comment.firebase_user_id);
            console.log('userData:', userData); // print userData
            return { ...comment, userData };
        }));
        console.log('commentsWithUserData:', commentsWithUserData); // print comments with UserData
        setComments(commentsWithUserData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    fetchComments();
  }, [recipeId]);
  
  
  const fetchUserData = async (userId) => {
    console.log('fetchUserData userId:', userId); 
    const db = getFirestore();
    const userDocRef = doc(db, "users", userId);

    try {
      const docSnapshot = await getDoc(userDocRef);
      console.log('docSnapshot sucess:'); 

      if (docSnapshot.exists()) {
        return docSnapshot.data();
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      console.error('User is not logged in.');
      return;
    }
  

    const firebaseUserId = auth.currentUser ? auth.currentUser.uid : null;
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
       
      const userData = await fetchUserData(userId);

      setComments(prevComments => [
        {
          comment_id: response.data.comment_id,
          comment_text: commentText,
          timestamp: response.data.timestamp, 
          userData: userData || { 
            profilePic: userData.profilePic || '/profpic.jpeg',
            username: userData.username,
          }
        },
        ...prevComments,
      ]);

      setCommentText('');
      
      
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try{
      const token = await auth.currentUser.getIdToken();
      if (!token) {
        console.error('User is not logged in.');
        return;
      }
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${userId}/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Comment deleted successfully:', response.data);
      setComments(prevComments => prevComments.filter(comment => comment.comment_id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
    console.log('Deleting comment:', commentId);
  };


  if (!currentUser) {
    return null;
  }

  return (
    <div className="comments-box">
      <form onSubmit={handleSubmit}>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..." required ></textarea>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderTop: '1px solid #212121' }}>
                <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', padding: '12.5px 16px', fontSize: '12px', fontWeight: '500', textAlign: 'center', color: '#FFF', backgroundColor: '#FF9800', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', cursor: 'pointer' }}>
                    Post comment
                </button>
                <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
            </div>
          </div>
        </div>
      </form>
    
      {comments.map((comment) => (
        <li key={comment.comment_id}>
          <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                {comment.userData?.profilePic && (
                  <>
                    <img className="mr-2 w-6 h-6 rounded-full" src={comment.userData.profilePic} alt={comment.userData.username}/>
                    {comment.userData.username}
                  </>
                )}

                {!comment.userData?.profilePic && (
                  <>
                    <img className="mr-2 w-6 h-6 rounded-full" src='/profpic.jpeg' alt={comment.userData?.username || 'No Username'}/>
                    {comment.userData?.username || 'No Username'}
                  </>
                )}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <time pubdate="true" dateTime={comment.timestamp}>
                    {new Date(comment.timestamp).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </p>
              </div>

              <button
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => handleDeleteComment(comment.comment_id)} 
              >
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10 14H3V5h10zm-8-7h2v6H5zm4 0h2v6h-2z"/>
                </svg>
                <span className="sr-only">Delete comment</span>
              </button>
              
            </footer>
            <p class="text-gray-500 dark:text-gray-400">
              {comment.comment_text}
            </p>
          </article>
        </li>
      ))}
      <br />
    </div>
  );
};

export default CommentForm;
