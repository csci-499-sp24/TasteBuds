import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { firestore } from '../../firebase/firebaseConfig';
import { getFirestore, doc, collection, query, getDoc } from 'firebase/firestore';
import Sidebar from "../../components/sidebar.js"

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const { userid } = router.query;

  useEffect(()=>{
    if (!router.isReady) return;

    const db = getFirestore();
    const userDocRef = doc(db, "users", userid);
    getDoc(userDocRef).then((docSnapshot)=>{
      const userData = docSnapshot.data();
      setUser(userData);
    })

  }, [router.isReady, userid]);

  // useEffect(() => {
  //   if (!router.isReady) return;

  //   const docRef = firebase.firestore().collection('users').doc(userid);
  //   docRef.get().then((doc) => {
  //     if (doc.exists) {
  //       setUser(doc.data());
  //     } else {
  //       setError('User not found.');
  //     }
  //   }).catch((error) => {
  //     setError('An error occurred while fetching user data.');
  //     console.error("Error fetching user data:", error);
  //   });
  // }, [router.isReady, userid]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>; // loading state
  }

  // the user data is present -> display the profile
  return (
    <div>
    <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
        {/* Sidebar component */}
        <Sidebar />
      <section className='bg'>
      <div className="head">
      <h1>User Profile</h1>
      <p style={{color: "white"}}><strong>Username:</strong> {user.username}</p>
      <p style={{color: "white"}}><strong>Email:</strong> {user.email}</p>
      {/* add more user details here */}
      </div>
      </section>
    </div>
  );
}
