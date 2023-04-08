
import { signInWithEmailAndPassword,signup , createUserWithEmailAndPassword, onAuthStateChanged, signOut,updateProfile, getAuth} from "firebase/auth";
import { FirebaseApp,FirebaseAuth,firestore } from "./Firebase";
import {createContext,useContext,useState,useEffect} from "react";

import {collection,addDoc} from "firebase/firestore";
import {deleteDoc,updateDoc,query,where,getDocs,orderBy,doc,getDoc} from "firebase/firestore";
import {  useNavigate } from "react-router-dom";

const FirebaseContext = createContext(null);
export const useFirebase = () =>{
    return useContext(FirebaseContext);
}

export const FirebaseProvider =(props)=>{
    
    const [user,setUser] = useState(null);
    const [userData,setuserData] = useState(null);
    
    useEffect(()=>{
       onAuthStateChanged(FirebaseAuth,(user)=>{
            if(user){
              
                setUser(user);
             //   fetchUserData().then((data)=>{ console.log(data)});
             
                console.log(user);
            }else{
                setUser(null);
            }
        })
    },[user]);
    
   
    const loginStatus = user ? (true) : (false);
   
    const signupUserwithEmailandPassword = async(email,password) =>{
        await createUserWithEmailAndPassword(FirebaseAuth,email,password);
    }
   

    const signinUserwithEmailandPassword = async(email,password) =>{
        await signInWithEmailAndPassword(FirebaseAuth,email,password);
    }

    const profileUpdate = (Type)=>{
        const auth = getAuth();
        updateProfile(auth.currentUser,{
            displayName:Type
        })
    }
    const userLogout = () =>{
        signOut(FirebaseAuth).then(()=>{
            return true;
        }).catch((err)=>{
            return false;
        })
    }

    const addNewUser = async (type,name,email,address,mob_no) => {
        console.log(user);
        await  addDoc(collection(firestore,"Users"),{
             Type : type,
             Name : name,
             Email : email,
             Mob_no : mob_no,
             Address : address,
         });
    
   };

//    const fetchUserData = async() =>{
    
//       const q = query(collection(firestore,"Users"),where("Email","==",user.email));
//       const querysnap = await getDocs(q);
      
//       querysnap.forEach((doc)=>{
     
//        const obj = doc.data();
//        obj.id = doc.id;
//     //    console.log(obj);
//        const newTaskData = obj;
//         console.log(newTaskData);
    
//         setUser(newTaskData);
//          console.log(user);
//       });
       
//        return userData;
        
//    }
     return (
        <FirebaseContext.Provider value = {{loginStatus,user,userData,addDoc,addNewUser,setuserData,signinUserwithEmailandPassword,signupUserwithEmailandPassword,userLogout,profileUpdate}} >{props.children}</FirebaseContext.Provider>
    );
}