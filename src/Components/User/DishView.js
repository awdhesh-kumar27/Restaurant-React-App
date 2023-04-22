import React, { useState,useEffect } from "react";
import './DishView.css';
import DishImg from "../../Assets/dish1.jpg";
import { useFirebase } from "../UserContext/Context";
import { useNavigate,useParams } from "react-router-dom";

const DishView = () =>{
    
    const firebase = useFirebase();
    const params = useParams();
    const navigate = useNavigate();
    const [dishData,setdishData] = useState("");
    const [quantity,setquantity] = useState(0);
    const [amount,setamount] = useState(0);
    const [totalamount,settotalamount] = useState(amount);
    

    var newData = {};
    // console.log(params);
    useEffect(()=>{
        firebase.getDishById(params.dishId).then((value)=> setdishData(value.data()));
      
          
   },[]);

    const iquantityHandler =  (event)=>{
           event.preventDefault();
           if(quantity<8){
            setquantity(quantity+1);
            settotalamount((quantity+1)*dishData.dishPrice);
        }
           console.log(quantity);
    }

    const dquantityHandler = (event) =>{
        event.preventDefault();
        if(quantity>1){
            setquantity(quantity-1);
          settotalamount((quantity-1)*dishData.dishPrice);
       
        }
    }
    const orderHandler = async(event) =>{
        event.preventDefault();
         if(totalamount>0){
          await firebase.addOrder(params.dishId,dishData.dishName,dishData.dishPrice,quantity,totalamount,dishData.userId,"Pending");
          window.alert("Order Successfully Done");
         navigate("/UserHome");
         }else{
            window.alert("Order Failed may be Quantity is not Feasible");
         }
    }
    

    return (
        <div>
         
            <div className="dish-view">
             <img className="dish-view-img" src={DishImg}></img>
             <h1 className="card-dish-name">{dishData.dishName}</h1>
             <h3 className="card-rest-name">Restaurant Name</h3>
             <h6 className="card-amt">Amount for one : {dishData.dishPrice}</h6>
             <div className="card-quant">
                <h6 className="quant-name">Quantity</h6>
                <div className="div-incre">

                    <button onClick={ iquantityHandler} className="btn-incre">+</button>
                     {' '}{quantity}{' '}
                    <button onClick={dquantityHandler} className="btn-incre">-</button>
                </div>
            </div>
             <div className="card-quant">
                <h6 className="quant-name">Total Amount</h6>
                <div className="div-amt">
                    {totalamount}
                 </div>
            </div>
            <div className="view-btn-div">
                <button class='card-view-btn'>Add to Cart</button>
                <button class='card-view-btn' onClick={orderHandler}>Order Now</button>
            </div>
            
            </div>
        </div>
    );
}

export default DishView;