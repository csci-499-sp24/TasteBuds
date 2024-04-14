import { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from './firebaseConfig'; 

const useUserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        if (!auth.currentUser) {
          throw new Error('No user is currently signed in.');
        }
        const token = await auth.currentUser.getIdToken();
        const userId = auth.currentUser.uid;

        console.log('Bearer token:', `Bearer ${token}`);

        const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL + `/api/users/`, {
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
      }
    };

    fetchUserDetails();
  }, [auth.currentUser]);

  return { userDetails, error };
};

export default useUserDetails;