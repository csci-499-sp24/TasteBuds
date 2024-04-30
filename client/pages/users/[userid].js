import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import Sidebar from "../../components/sidebar.js"
import ProfilePicPreview from '../../components/ProfilePicPreview'; 

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { userid } = router.query;
  const fileInputRef = useRef(null);
  const defaultProfilePic = '/profpic.jpeg';

  useEffect(() => {
    if (!router.isReady) return;
    const db = getFirestore();
    const userDocRef = doc(db, "users", userid);
    getDoc(userDocRef).then((docSnapshot) => {
      const userData = docSnapshot.data();
      setUser(userData);
      setNewUsername(userData.username);
      setNewEmail(userData.email);
      setProfilePic(userData.profilePic); 
    }).catch(error => setError('An error occurred while fetching user data.'));
  }, [router.isReady, userid]);

  const saveUpdates = () => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", userid);
    updateDoc(userDocRef, {
      username: newUsername,
      email: newEmail,
      profilePic: profilePic
    }).then(() => {
      setUser({ ...user, username: newUsername, email: newEmail, profilePic: profilePic });
      setEditMode(false);
    }).catch(error => setError('Failed to update profile.'));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Sidebar />
      <section className='bg'>
        <div className="head">
          <h1>User Profile</h1>
          {/* include the ProfilePicPreview component with the default or user's profile picture */}
          <ProfilePicPreview 
            fileInputRef={fileInputRef} 
            profilePic={profilePic || defaultProfilePic} 
            setProfilePic={setProfilePic}
          />
          {editMode ? (
            <>
              <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)} />
              <input type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} />
              <button onClick={saveUpdates}>Save Changes</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <>
              <p><strong>Username: </strong>{user.username}</p>
              <p><strong>Email: </strong>{user.email}</p>
              <button onClick={() => setEditMode(true)}>Edit Profile</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}