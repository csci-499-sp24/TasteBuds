import { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase/firebaseConfig';
import { getFirestore, doc, getDoc } from "firebase/firestore";


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
        const commentsWithUserData = await Promise.all(response.data.map(async (comment) => {
          const userData = await fetchUserData(comment.firebase_user_id);
          console.log('userData:', userData); // Log userData
          return { ...comment, userData };
        }));
        console.log('commentsWithUserData:', commentsWithUserData); // Log commentsWithUserData
        setComments(commentsWithUserData);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    fetchComments();
  }, [recipeId]);
  
  
  const fetchUserData = async (userId) => {
    console.log('userId:', userId); // Log userId to check its value
    const db = getFirestore();
    const userDocRef = doc(db, "users", userId);
  
    try {
      const docSnapshot = await getDoc(userDocRef);
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
      <br />
      <form onSubmit={handleSubmit}>
        <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" class="sr-only">Your comment</label>
                <textarea id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" 
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..." required ></textarea>
            </div>
            <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Post comment
                </button>
                <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                </div>
            </div>
        </div>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <article className="p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img className="mr-2 w-6 h-6 rounded-full" src={(comment.userData?.profilePic || '/profpic.jpeg')} alt={comment.userData?.username} />
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
                  id={`dropdownComment${comment.id}Button`}
                  data-dropdown-toggle={`dropdownComment${comment.id}`}
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div
                  id={`dropdownComment${comment.id}`}
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`dropdownMenuIconHorizontalButton${comment.id}`}>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">{comment.comment_text}</p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                >
                  <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                  </svg>
                  Reply
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default CommentForm;
