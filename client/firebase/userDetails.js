import { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from './firebaseConfig';

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          throw new Error('No user is currently signed in.');
        }

        const token = await currentUser.getIdToken();
        const userId = currentUser.uid;

        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        setUserDetails(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError(error.message);
        setUserDetails(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return { userDetails, loading, error }; //import useUserDetails hook, then call the object userDetails.username or userDetails.email to show the details on profile page to render details 
};

export default useUserDetails;