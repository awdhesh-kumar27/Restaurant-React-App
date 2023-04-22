
import React ,{useState,useEffect} from "react";
import './PastOrder.css';
import { useFirebase } from "../UserContext/Context";
import { useNavigate } from "react-router-dom";
import OrderCard from "../User/OrderCard";
import OrderHistoryCard from "./OrderHistoryCard";

const PastOrder = ()=>{
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
  var flag = false;

  return (
      <div className="order-dishes">

          { 
           
              currentData.map((dish)=>(
                  dish.map((data)=>(
              
                   (data.RestId == user.uid && (data.status=="Rejected" || data.status=="Delievered")) ?( <OrderCard key={dish.id} dish = {data}></OrderCard>   ): ""
                   
                  )
              ))
              )
          }

       
      </div>
  );
}

export default PastOrder;