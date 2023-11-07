import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";




export const AuthContext = createContext();
const auth = getAuth(app);


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

    useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentuser =>{
            console.log('current user', currentuser)
            setuser(currentuser);
            
        })
        return ()=>{
            unsubscribe()
        }
    },[])

  


     const authinfo = {
        user,
        createuser,
        login,
        logout
     }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;