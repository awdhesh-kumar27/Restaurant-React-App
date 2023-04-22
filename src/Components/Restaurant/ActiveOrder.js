
import React,{useState,useEffect} from "react";
import { useFirebase } from "../UserContext/Context";
import { useNavigate } from "react-router-dom";
import './ActiveOrder.css';
import OrderCard from "./OrderCard";


const ActiveOrder = ()=>{


    const {user} = useFirebase();
    const firebase = useFirebase();
    const {dishData} = useFirebase();

    const [currentData,setcurrentData] = useState([]);
    useEffect( ()=>{
      firebase.fetchAllOrders().then((Data)=>{
       console.log(Data);
  
         setcurrentData([...currentData,Data])
      });
      console.log(currentData);
    },[user,dishData]);


    return (
        <div className="order-dishes">
           {
                currentData.map((dish)=>(
                    dish.map((data)=>(
                
                     (data.RestId == user.uid && (data.status == "Pending" || data.status == "Order-Accepted")) ? <OrderCard key={dish.id} dish = {data}></OrderCard> : ""
                     
                    )
                ))
                )
            }

         
        </div>
    );
}

export default ActiveOrder;