
import React ,{useState,useEffect} from "react";
import OrderCard from "./OrderCard";
import './YourOrders.css';
import { useFirebase } from "../UserContext/Context";
import { useNavigate } from "react-router-dom";

const YourOrders = ()=>{

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
                
                     (data.UserId == user.uid && (data.status == "Pending" || data.status == "Order-Accepted")) ? <OrderCard key={dish.id} dish = {data}></OrderCard> : ""
                     
                    )
                ))
                )
            }

         
        </div>
    );
}

export default YourOrders;