
import React, {useState, useEffect } from "react";

import RestDishCard from "./RestDishCard";
import { useFirebase } from "../UserContext/Context";
import './ActiveDish.css';





const ActiveDish = ()=>{
    const {user} = useFirebase();
    const firebase = useFirebase();
    const {dishData} = useFirebase();
    const {fetchedDish} = useFirebase();
    const [currentData,setcurrentData] = useState([]);

   useEffect( ()=>{
      firebase.fetchRestDishData().then((Data)=>{
       console.log(Data);
     //   console.log(Data);
         setcurrentData([...currentData,Data])
      });
      console.log(currentData);
    },[user,dishData]);
    
    return (
        <div className="active-dishes">
            {
                currentData.map((dish)=>(
                    dish.map((data)=>(
                    <RestDishCard key={dish.id} dish = {data}></RestDishCard>
                    )
                ))
                )
            }
        
        </div>
    );
}

export default ActiveDish;