import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, firestore } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const UserAuthContext = ({ children }) => {
  const [error, setError] = useState("");
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user.uid);
      } else {
        console.log("no user available");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signup = async (email, password, username) => {
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(firestore, "users", user.uid), {
        username,
        email,
        // Add other user data here to store in the firestore database.
      });

      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use");
      } else if (error.code === "auth/weak-password") {
        setError("Password must be at least 6 characters");
      } else {
        setError(error.message);
      }
    }
  };

  const signOut = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const value = { currentUser, signup, signOut, error };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default UserAuthContext;