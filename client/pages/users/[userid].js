import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import firebase from '../../firebase/firebaseConfig'; 

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const { userid } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    const docRef = firebase.firestore().collection('users').doc(userid);
    docRef.get().then((doc) => {
      if (doc.exists) {
        setUser(doc.data());
      } else {
        setError('User not found.');
      }
    }).catch((error) => {
      setError('An error occurred while fetching user data.');
      console.error("Error fetching user data:", error);
    });
  }, [router.isReady, userid]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>; // loading state
  }

  // the user data is present -> display the profile
  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* add more user details here */}
    </div>
  );
}
