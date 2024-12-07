import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.init';


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const gooleProvider = new GoogleAuthProvider;
    const [user, setUser] = useState(null)
    const [loader,setLoader]=useState(true)
    const [MyApplication,setApplication]=useState([])
    console.log(user)
    console.log(MyApplication)

    const googleLogIn = () => {
        setLoader(true)
        return signInWithPopup(auth, gooleProvider)
    }

    const registerWithEmal = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInWithEmail = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPass =(email)=>{
        setLoader(true)
        return sendPasswordResetEmail(auth,email)
    }

    const updateUserProfile = userData=>{
        return updateProfile(auth.currentUser,userData)
    }

    const singOutUser = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsuscribe()
        }
    }, [])

    const authInfo = {
        user,
        loader,
        setApplication,
        googleLogIn,
        singOutUser,
        registerWithEmal,
        logInWithEmail,
        resetPass,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;