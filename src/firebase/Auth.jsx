// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth"
import { createContext, useContext, useState, useEffect } from "react";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const AuthContext = createContext(null);

const AuthProvider = (({children})=>{
    const auth = useProvideAuth()
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
})

export const useAuth = () => useContext(AuthContext)

function useProvideAuth() {
    const [user, setUser] = useState()
    const signUp = (email, password, displayName) => createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
        updateProfile(user, { displayName })
        setUser(user)
        return user
    })

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
        setUser(user)
        return user
    })

    const signOutUser = () => signOut(auth).then(()=>setUser(null))

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user)=>{
        user? setUser(user):setUser(null)
      })
    
      return () => {
        unsubscribe()
      }
    })
    
    return{
        signIn, signUp, signOut:signOutUser,user
    }
}

export default AuthProvider