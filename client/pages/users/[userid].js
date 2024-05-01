import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import Sidebar from "../../components/sidebar.js";
import ProfilePicPreview from '../../components/ProfilePicPreview'; 
import styles from './UserProfile.module.css'


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

  const savePantryAndFridgeItems = async () => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", userid); 
  
    const pantryString = pantryItems.join(','); 
    const fridgeString = fridgeItems.join(','); 

    updateDoc(userDocRef, {
      username: newUsername,
      email: newEmail,
      profilePic: profilePic
    }).then(() => {
      setUser({ ...user, username: newUsername, email: newEmail, profilePic: profilePic });
      setEditMode(false);
    }).catch(error => setError('Failed to update profile.'));
  
    try {
      await updateDoc(userDocRef, {
        pantry: pantryString, 
        fridge: fridgeString  
      });
      console.log('Pantry and fridge items saved successfully');
    } catch (error) {
      console.error('Error saving pantry and fridge items: ', error);
      setError('Failed to save pantry and fridge items.');
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
    <section className='bg'>
    <div className={styles.mainContainer}>
    <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <Sidebar />
      <section className={styles.profileLayout}>
        <div className={styles.profileBox}>
          <ProfilePicPreview 
            fileInputRef={fileInputRef}
            profilePic={profilePic || '/profpic.jpeg'}
            setProfilePic={setProfilePic}
          />
          <h2>{user?.username}</h2>
          <p>{user?.email}</p>
        </div>
        <div>
        <div className={styles.pantryBox}>
          <h2>My Pantry</h2>
          <div className={styles.pantryTags}>
            {pantryItems.map((item, index) => (
              <div key={index} className={styles.pantryTag}>
                {item}
                <button onClick={() => removeItem(item, pantryItems, setPantryItems)}>×</button>
              </div>
            ))}
          </div>
          {editMode && (
          <input
            ref={pantryInputRef}
            type="text"
            onKeyDown={(e) => handleKeyDown(e, pantryItems, setPantryItems, pantryInputRef)}
            placeholder="Add pantry item and press 'Enter' "
            className={styles.pantryInput}
            size="30"
          />
          )}
        </div>
        <div className={styles.fridgeBox}>
          <h2>My Fridge</h2>
          <div className={styles.fridgeTags}>
            {fridgeItems.map((item, index) => (
              <div key={index} className={styles.fridgeTag}>
                {item}
                <button onClick={() => removeItem(item, fridgeItems, setFridgeItems)}>×</button>
              </div>
              ))}
              </div>
              {editMode && (
              <input
                ref={fridgeInputRef}
                type="text"
                onKeyDown={(e) => handleKeyDown(e, fridgeItems, setFridgeItems, fridgeInputRef)}
                placeholder="Add fridge item and press 'Enter' "
                className={styles.pantryInput} 
                size="30"
              />
              )}
            </div>
            </div>
            </section>
            {editMode && (
              <>
                <button onClick={savePantryAndFridgeItems} className={styles.saveButton}>Save Changes</button>
                <button onClick={() => setEditMode(false)} className={styles.cancelButton}>Cancel</button>
              </>
            )}
          {!editMode && (
            <button onClick={() => setEditMode(true)} className={styles.editProfileButton}>Edit Profile</button>
          )}
        </div>
        </section>
        </div>
      );
    }