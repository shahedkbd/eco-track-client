import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  const fetchUserDetails = async (email) => {
    try {
      const res = await fetch(
        `https://eco-track-server-one-rho.vercel.app/users?email=${email}`
      );

      if (!res.ok) {
        throw new Error("User not authorized");
      }

      const data = await res.json();

      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      setUserDetails([]);
    }
  };

  console.log("Firebase User:", user);
  console.log("DB User:", userDetails);
  console.log("userDetails:", userDetails);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      //   console.log(currentUser);

      if (currentUser?.email) {
        await fetchUserDetails(currentUser.email);
      } else {
        setUserDetails(null);
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    setUser,
    userDetails,
    role: userDetails?.length > 0 ? userDetails[0].role : null,
    loading,
    setLoading,
    registerWithEmail,
    signinWithEmail,
    logout,
    resetPassword,
    signinWithGoogle,
  };
  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
