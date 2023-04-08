import React,{useState} from "react";

import './OrderHistoryCard.css';
import DishImg from "../../Assets/dish1.jpg";

const OrderHistoryCard = ()=>{
    const [quantity,setquantity] = useState(1);
    const amount = 50;
    const [totalamount,settotalamount] = useState(amount);
    const [Status,setStatus] = useState("Pending");
    return(
        <div>
              <div className="order-card">
             <img className="dish-view-img" src={DishImg}></img>
             <h1 className="card-dish-name">Dish Name</h1>
             <h3 className="card-rest-name">Restaurant Name</h3>
             <h6 className="card-amt">Amount for one</h6>
            
             <div className="card-quant">
                <h6 className="quant-name">Quantity</h6>
                <div className="div-amt">
                    {quantity}
                 </div>
            </div>
             <div className="card-quant">
                <h6 className="quant-name">Total Amount</h6>
                <div className="div-amt">
                    {totalamount}
                 </div>
            </div>
            <div className="card-quant">
                <h6 className="quant-name">Status</h6>
                <div className="div-amt">
                    {Status}
                 </div>
            </div>
            <div className="card-quant">
                <h6 className="quant-name">Date</h6>
                <div className="div-amt">
                    Date
                 </div>
            </div>
            </div>
        </div>
    );
     
}

export default OrderHistoryCard;