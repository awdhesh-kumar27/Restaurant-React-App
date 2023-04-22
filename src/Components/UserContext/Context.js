
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
    const [dishData,setDishData] = useState(null);
    const [orderData,setOrderData] = useState(null);
    
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

   const addDish = async (dishName,dishPrice,restName) => {
    console.log(firestore);
      await  addDoc(collection(firestore,"dishes"),{
            dishName,
            dishPrice,
            restName,
            userId : user.uid,
            userEmail : user.email,
            date : new Date()
       });
       console.log(firestore);
 };


 const addOrder = async (dishId,restName,dishName,dishPrice,dishQuantity,dishTotalPrice,RestId,status) => {
    console.log(firestore);
      await  addDoc(collection(firestore,"Orders"),{
            dishId,
            restName,
            dishName,
            dishPrice,
            dishQuantity,
            dishTotalPrice,
            RestId,
            status,
            UserId : user.uid,
            date : new Date()
       });
       console.log(firestore);
 };

 const deleteRestDish = async(id)=>{
    const docRef = doc(firestore,'dishes',id);
    await deleteDoc(docRef);
   }

   const getDishById = async (id)=>{
    const docRef = doc(firestore,'dishes',id);
    const result = await getDoc(docRef);
    //console.log(result.data());
    return result;
  }

  const getRestNameById = async ()=>{
    const docRef = doc(firestore,'Users',user.uid);
    const result = await getDoc(docRef);
    //console.log(result.data());
    return result;
  }
  var restDetail = [];
  const fetchRestDetail = async() =>{
      
      const q = query(collection(firestore,"Users"),where("Email","==",user.email));
      const querysnap = await getDocs(q);
      restDetail = [];
      querysnap.forEach((doc)=>{
     
       const obj = doc.data();
       obj.id = doc.id;
      //  console.log(obj);
  
       restDetail.push(obj);
       // console.log(newDishData)
      });
     // console.log(fetchedDish);
  
       console.log(restDetail);
      return restDetail;  
   }


  const updateOrderById = async (id, newstatus) =>{
    const docRef = doc(firestore,'Orders',id);
    await updateDoc(docRef,{
        status : newstatus
    });
}

var alldish = [];
const fetchAllDish = async() =>{
    
    const q = query(collection(firestore,"dishes"));
    const querysnap = await getDocs(q);
    alldish = [];
    querysnap.forEach((doc)=>{
   
     const obj = doc.data();
     obj.id = doc.id;
    //  console.log(obj);

     alldish.push(obj);
     // console.log(newDishData)
    });
   // console.log(fetchedDish);

     console.log(alldish);
    return alldish;  
 }



 var fetchedDish = [];
   const fetchRestDishData = async() =>{
    
      const q = query(collection(firestore,"dishes"),where("userEmail","==",user.email));
      const querysnap = await getDocs(q);
      fetchedDish = [];
      querysnap.forEach((doc)=>{
     
       const obj = doc.data();
       obj.id = doc.id;
      //  console.log(obj);
       const newDishData = obj;
       fetchedDish.push(obj);
       // console.log(newDishData)

      });
     // console.log(fetchedDish);

      return fetchedDish;
      
   }

   
    var allOrders = [];
    const fetchAllOrders = async() =>{
    
        const q = query(collection(firestore,"Orders"));
        const querysnap = await getDocs(q);
        allOrders = [];
        querysnap.forEach((doc)=>{
       
         const obj = doc.data();
         obj.id = doc.id;
        //  console.log(obj);

         allOrders.push(obj);

 
        //   console.log(user);
        });
       // console.log(fetchedDish);
   
         console.log(allOrders);
        return allOrders;  
     }




     return (
        <FirebaseContext.Provider value = {{fetchRestDetail,getRestNameById,updateOrderById,fetchAllOrders,addOrder,getDishById,fetchAllDish,deleteRestDish,fetchedDish,loginStatus,user,userData,dishData,orderData,fetchRestDishData,addDish,addDoc,addNewUser,setuserData,signinUserwithEmailandPassword,signupUserwithEmailandPassword,userLogout,profileUpdate}} >{props.children}</FirebaseContext.Provider>
    );
}