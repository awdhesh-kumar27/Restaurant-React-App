
import { signInWithEmailAndPassword,signup , createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { FirebaseApp,FirebaseAuth } from "./Firebase";
import {createContext,useContext,useState,useEffect} from "react"

const FirebaseContext = createContext(null);
export const useFirebase = () =>{
    return useContext(FirebaseContext);
}

export const FirebaseProvider =(props)=>{
    
    const [user,setUser] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(FirebaseAuth,(user)=>{
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
        })
    },[user]);

    const signupUserwithEmailandPassword = (email,password) =>{
        createUserWithEmailAndPassword(FirebaseAuth,email,password);
    }
   

    const signinUserwithEmailandPassword =(email,password) =>{
        signInWithEmailAndPassword(FirebaseAuth,email,password);
    }

    const userLogout = () =>{
        signOut(FirebaseAuth).then(()=>{
            return true;
        }).catch((err)=>{
            return false;
        })
    }

    return (
        <FirebaseContext.Provider value = {{user,signinUserwithEmailandPassword,signupUserwithEmailandPassword,userLogout}} >{props.children}</FirebaseContext.Provider>
    );
}