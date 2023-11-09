import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import axios from "axios";




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
            console.log('current user', currentuser);
            const useremail = currentuser?.email || user?.email;
            const loggeduser = {email : useremail }
            setuser(currentuser);
            setloader(false);
            if(currentuser){        
                axios.post('http://localhost:5000/jwt',loggeduser,  { withCredentials : true})
                .then(res=>{
                    console.log('token response',res.data)
                })
            }else{
                axios.post('http://localhost:5000/signout',loggeduser,{withCredentials : true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        })


        return ()=>{
            unsubscribe()
        }
    },[user?.email])

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