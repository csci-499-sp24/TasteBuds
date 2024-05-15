import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import Sidebar from "../../components/sidebar.js";
import ProfilePicPreview from '../../components/ProfilePicPreview'; 
import Dropdown from '../../components/Dropdown.js';  
import styles from './UserProfile.module.css';

export default function UserProfile() {
  const router = useRouter();
  const { userid } = router.query;
  const fileInputRef = useRef(null);

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [error, setError] = useState('');
  const [pantryItems, setPantryItems] = useState([]);
  const [fridgeItems, setFridgeItems] = useState([]);
  const [pantryInputValue, setPantryInputValue] = useState('');
  const [fridgeInputValue, setFridgeInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Fetch ingredients function
  const fetchIngredients = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getAllIngredients`);
      if (!response.ok) {
        throw new Error('Failed to fetch ingredients');
      }
      const data = await response.json();
      setSuggestions(data.map(ingredient => ({ name: ingredient.standard_name, id: ingredient.ingredient_id })));
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      setError('Failed to fetch ingredients.');
    }
  };

  useEffect(() => {
    if (!router.isReady) return;
    const db = getFirestore();
    const userDocRef = doc(db, "users", userid);

    getDoc(userDocRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        console.log("User data from Firestore:", userData); // Debug log

        setUser(userData);
        setNewUsername(userData.username);
        setNewEmail(userData.email);
        setProfilePic(userData.profilePic || '/profpic.jpeg');

        const pantryArray = parseJSON(userData.pantry);
        setPantryItems(pantryArray);

        const fridgeArray = parseJSON(userData.fridge);
        setFridgeItems(fridgeArray);
      }
    }).catch((error) => {
      console.error('Detailed error:', error);
      setError('An error occurred while fetching user data.');
    });

    fetchIngredients(); // Fetch ingredients on mount
  }, [router.isReady, userid]);

  const parseJSON = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Failed to parse JSON:', error); // Debug log
      return [];
    }
  };

  const addItem = (value, items, setItems) => {
    if (value && !items.some(item => item.id === value.id)) {
      setItems([...items, value]);
    }
  };

  const handleKeyDown = (event, items, setItems, setInputValue) => {
    if (['Enter', ','].includes(event.key)) {
      event.preventDefault();
      const selectedItem = suggestions.find(item => item.name.toLowerCase() === event.target.value.trim().toLowerCase());
      if (selectedItem) {
        addItem(selectedItem, items, setItems);
        setInputValue('');
      }
    }
  };

  const savePantryAndFridgeItems = async () => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", userid);

    const pantryString = JSON.stringify(pantryItems);
    const fridgeString = JSON.stringify(fridgeItems);

    try {
      await updateDoc(userDocRef, {
        username: newUsername,
        email: newEmail,
        profilePic: profilePic,
        pantry: pantryString,
        fridge: fridgeString
      });
      setUser({
        ...user,
        username: newUsername,
        email: newEmail,
        profilePic: profilePic,
        pantry: pantryString,
        fridge: fridgeString
      });
      setEditMode(false);
      console.log('Pantry and fridge items saved successfully');
    } catch (error) {
      setError('Failed to update profile.');
      console.error('Error saving pantry and fridge items:', error);
    }
  };

  const removeItem = (item, items, setItems) => {
    if (editMode) {
      setItems(items.filter((i) => i.id !== item.id));
    }
  };

  const cancelEdit = () => {
    setEditMode(false);
    setNewUsername(user.username);
    setNewEmail(user.email);
    setProfilePic(user.profilePic || '/profpic.jpeg');
    const pantryArray = parseJSON(user.pantry);
    setPantryItems(pantryArray);
    const fridgeArray = parseJSON(user.fridge);
    setFridgeItems(fridgeArray);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.mainContainer}>
          <Sidebar />
          <section className={styles.profileLayout}>
            <div className={styles.profileBox}>
              <ProfilePicPreview
                fileInputRef={fileInputRef}
                profilePic={profilePic || '/profpic.jpeg'}
                setProfilePic={setProfilePic}
              />
              {editMode ? (
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Username"
                    className={styles.input}
                  />
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Email"
                    className={styles.input}
                  />
                </div>
              ) : (
                <div>
                  <h2>{user.username}</h2>
                  <p>{user.email}</p>
                </div>
              )}
            </div>
            <div>
              <div className={styles.pantryBox}>
                <h2>My Pantry</h2>
                <div className={styles.pantryTags}>
                  {pantryItems.map((item, index) => (
                    <div key={index} className={styles.pantryTag}>
                      {item.name}
                      <button onClick={() => removeItem(item, pantryItems, setPantryItems)} disabled={!editMode}>×</button>
                    </div>
                  ))}
                </div>
                {editMode && (
                  <div>
                    <input
                      value={pantryInputValue}
                      onChange={(e) => setPantryInputValue(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, pantryItems, setPantryItems, setPantryInputValue)}
                      placeholder="Type pantry item and press 'Enter'"
                      className={styles.pantryInput}
                    />
                    {pantryInputValue && (
                      <Dropdown
                        suggestions={suggestions.filter((item) => item.name.toLowerCase().includes(pantryInputValue.toLowerCase()))}
                        onSelect={(value) => {
                          addItem(value, pantryItems, setPantryItems);
                          setPantryInputValue('');
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className={styles.fridgeBox}>
                <h2>My Fridge</h2>
                <div className={styles.fridgeTags}>
                  {fridgeItems.map((item, index) => (
                    <div key={index} className={styles.fridgeTag}>
                      {item.name}
                      <button onClick={() => removeItem(item, fridgeItems, setFridgeItems)} disabled={!editMode}>×</button>
                    </div>
                  ))}
                </div>
                {editMode && (
                  <div>
                    <input
                      value={fridgeInputValue}
                      onChange={(e) => setFridgeInputValue(e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, fridgeItems, setFridgeItems, setFridgeInputValue)}
                      placeholder="Type fridge item and press 'Enter'"
                      className={styles.pantryInput}
                    />
                    {fridgeInputValue && (
                      <Dropdown
                        suggestions={suggestions.filter((item) => item.name.toLowerCase().includes(fridgeInputValue.toLowerCase()))}
                        onSelect={(value) => {
                          addItem(value, fridgeItems, setFridgeItems);
                          setFridgeInputValue('');
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
          {editMode ? (
            <div className={styles.buttonContainer}>
              <button onClick={savePantryAndFridgeItems} className={styles.saveButton}>Save Changes</button>
              <button onClick={cancelEdit} className={styles.cancelButton}>Cancel</button>
            </div>
          ) : (
            <div className={styles.buttonContainer}>
              <button onClick={() => setEditMode(true)} className={styles.editProfileButton}>Edit Profile</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
