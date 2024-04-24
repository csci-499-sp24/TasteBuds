// firebase/userAuthContext.js
import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut as firebaseSignOut, // Renamed to avoid name clash
} from "firebase/auth";
import { auth, firestore } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const UserAuthContextProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user.uid);
      } else {
        setCurrentUser(null);
        console.log("no user available");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signup = async (email, password, username) => {
    setError("");
  
    console.log('Attempting to sign up with:', email, username); // Log the email and username
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      console.log('Firebase Auth User created:', user); // Log the auth user data
  
      // Now we create the user document in Firestore
      const userDocRef = doc(firestore, "users", user.uid);
      console.log('Attempting to create a Firestore document for:', userDocRef.path); // Log the path of the doc
  
      await setDoc(userDocRef, {
        username: username,
        email: email,
        // Add other user data here
      });
  
      console.log('Firestore document created successfully'); // Indicate success
  
      setCurrentUser(user); // Set the current user in the state
    } catch (error) {
      // If an error occurs, log it
      console.error("Error during signup:", error);
      setError(error.message);
    }
  };
  

  const logout = async () => {
    try {
      await firebaseSignOut(auth); // Correctly use the renamed import
      setCurrentUser(null); // Remove the user from the state
    } catch (error) {
      console.error("Error signing out:", error);
      setError(error.message);
    }
  };

  const value = { currentUser, signup, logout, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserAuthContextProvider;
