import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";




export const AuthContext = createContext();
const auth = getAuth(app);

const gooleprovider = new GoogleAuthProvider();


 const Authprovider = ({children}) => {

    const [user,setuser] = useState(null);
    const [loader,setloader] = useState(true);
 

    const createuser = (email,password)=>{
        setloader(true)
        return createUserWithEmailAndPassword(auth,email,password)  
    }

    const login = (email,password)=>{
        setloader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
        setloader(true)
        return signOut(auth)
    }

    const loginwithgoogle = ()=>{
        setloader(true)
        return signInWithPopup(auth,gooleprovider)
    }

    useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            console.log('current user', currentuser)
            setuser(currentuser);
            setloader(false)
            
        })
        return ()=>{
            unsubscribe()
        }
    },[])

  


     const authinfo = {
        loader,
        user,
        createuser,
        login,
        logout,
        loginwithgoogle
     }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;