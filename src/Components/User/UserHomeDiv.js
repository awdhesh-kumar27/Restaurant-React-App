
import React ,{useState,useEffect} from "react";

import DishCard from "./DishCard";
import './UserHomeDiv.css';
import { useFirebase } from "../UserContext/Context";


const UserHomeDiv = ()=>{
  const {user} = useFirebase();
  const firebase = useFirebase();
  const {dishData} = useFirebase();
  
  const [currentData,setcurrentData] = useState([]);
    useEffect( ()=>{
      firebase.fetchAllDish().then((Data)=>{
       console.log(Data);
  
         setcurrentData([...currentData,Data])
      });
      console.log(currentData);
    },[user,dishData]);

    
    return (
        <div className="dishes">
          
          {
                currentData.map((dish)=>(
                    dish.map((data)=>(
                    <DishCard key={dish.id} dish = {data}></DishCard>
                    )
                ))
                )
            }
        </div>
    );
}

export default UserHomeDiv;