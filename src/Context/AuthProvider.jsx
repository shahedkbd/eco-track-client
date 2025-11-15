import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const GoogleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerWithEmail = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinWithEmail = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const resetPassword =(email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const signinWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const AuthInfo={
        user,
        setUser,
        loading,
        setLoading,
        registerWithEmail,
        signinWithEmail,
        logout,
        resetPassword,
        signinWithGoogle


    }
    return (
        <AuthContext value={AuthInfo}>{children}</AuthContext>
    )
};

export default AuthProvider;