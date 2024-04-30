import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import Sidebar from "../../components/sidebar.js";
import ProfilePicPreview from '../../components/ProfilePicPreview'; 

export default function UserProfile() {
  const router = useRouter();
  const { userid } = router.query;
  const fileInputRef = useRef(null);
  const pantryInputRef = useRef(null);
  const fridgeInputRef = useRef(null);

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [error, setError] = useState('');
  const [pantryItems, setPantryItems] = useState([]);
  const [fridgeItems, setFridgeItems] = useState([]); 

  useEffect(() => {
    if (!router.isReady) return;
    const db = getFirestore();
    const userDocRef = doc(db, "users", userid);

    getDoc(userDocRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        setUser(userData);
        setNewUsername(userData.username);
        setNewEmail(userData.email);
        setProfilePic(userData.profilePic || '/profpic.jpeg');

        const pantryArray = typeof userData.pantry === 'string' ? userData.pantry.split(',') : [];
        setPantryItems(pantryArray);

        const fridgeArray = typeof userData.fridge === 'string' ? userData.fridge.split(',') : [];
        setFridgeItems(fridgeArray);
      }
    }).catch((error) => {
      console.error('Detailed error:', error);
      setError('An error occurred while fetching user data.');
    });
  }, [router.isReady, userid]);

  const handleKeyDown = (event, items, setItems, inputRef) => {
    if (['Enter', ','].includes(event.key)) {
      event.preventDefault();
      const value = inputRef.current.value.trim();
      if (value && !items.includes(value)) {
        setItems([...items, value]);
        inputRef.current.value = '';
      }
    }
  };

  const removeItem = (item, items, setItems) => {
    setItems(items.filter((i) => i !== item));
  };

  const saveItems = async (items, itemKey) => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", userid);
    const itemsString = items.join(','); 

    try {
      await updateDoc(userDocRef, {
        [itemKey]: itemsString
      });
      console.log(`${itemKey} updated successfully.`);
    } catch (error) {
      console.error(`Failed to update ${itemKey}:`, error);
      setError(`Failed to update ${itemKey}.`);
    }
  };

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
          <ProfilePicPreview 
            fileInputRef={fileInputRef}
            profilePic={profilePic}
            setProfilePic={setProfilePic}
            className="profile-pic"
          />
          {editMode ? (
            <>
              <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)} />
              <input type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} />
              <div className="pantry-container">
              <h2>My Pantry</h2>
              <div className="pantry-tags">
                {pantryItems.map((item, index) => (
                  <div key={index} className="pantry-tag">
                    {item}
                    <button onClick={() => removeItem(item, pantryItems, setPantryItems)}>×</button>
                  </div>
                ))}
              </div>
              <input
                ref={pantryInputRef}
                type="text"
                onKeyDown={(e) => handleKeyDown(e, pantryItems, setPantryItems, pantryInputRef)}
                placeholder="Add pantry item and press Enter"
                className="tag-input"
              />
            </div>
            <div className="fridge-container">
              <h2>My Fridge</h2>
              <div className="fridge-tags">
                {fridgeItems.map((item, index) => (
                  <div key={index} className="fridge-tag">
                    {item}
                    <button onClick={() => removeItem(item, fridgeItems, setFridgeItems)}>×</button>
                  </div>
                ))}
              </div>
              <input
                ref={fridgeInputRef}
                type="text"
                onKeyDown={(e) => handleKeyDown(e, fridgeItems, setFridgeItems, fridgeInputRef)}
                placeholder="Add fridge item and press Enter"
                className="tag-input"
              />
            </div>
            <button onClick={() => saveUpdates()}>Save Changes</button>
            <button onClick={() => saveItems(pantryItems, 'pantry')}>Save Pantry</button>
            <button onClick={() => saveItems(fridgeItems, 'fridge')}>Save Fridge</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </>
        ) : (
          <>
            <p><strong>Username: </strong>{user.username}</p>
            <p><strong>Email: </strong>{user.email}</p>
            <div className="pantry-container">
              <h2>My Pantry</h2>
              {pantryItems.length > 0 ? (
                pantryItems.map((item, index) => (
                  <span key={index} className="pantry-tag">{item}</span>
                ))
              ) : (
                <p>No items in pantry.</p>
              )}
            </div>
            <div className="fridge-container">
              <h2>My Fridge</h2>
              {fridgeItems.length > 0 ? (
                fridgeItems.map((item, index) => (
                  <span key={index} className="fridge-tag">{item}</span>
                ))
              ) : (
                <p>No items in fridge.</p>
              )}
            </div>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </section>
  </div>
);
}
