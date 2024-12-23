import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/FirebaseConfig";


export const AuthContext =createContext();
const auth =getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser =(email,password)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);

    }  

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        })
        return ()=>{
            return unsubscribe
        }
    },[])


    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut

    }
    return (
        <div>
             <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;