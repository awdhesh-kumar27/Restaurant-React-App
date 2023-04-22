import React,{useState} from "react";
import './OrderCard.css';
import DishImg from "../../Assets/dish1.jpg";

const OrderCard = (props)=>{


    const [quantity,setquantity] = useState(1);
    const amount = 50;
    const [totalamount,settotalamount] = useState(amount);
    const [Status,setStatus] = useState("Pending");

    return (
        <div>
             <div className="order-card">
             <img className="dish-view-img" src={DishImg}></img>
             <h1 className="card-dish-name">{props.dish.dishName}</h1>
             <h3 className="card-rest-name">Restaurant Name</h3>
             <h6 className="card-amt">Amount for one : {props.dish.dishPrice}</h6>
            
             <div className="card-quant">
                <h6 className="quant-name">Quantity :</h6>
                <div className="div-amt">
                    {props.dish.dishQuantity}
                 </div>
            </div>
             <div className="card-quant">
                <h6 className="quant-name">Total Amount</h6>
                <div className="div-amt">
                    {props.dish.dishTotalPrice}
                 </div>
            </div>
            <div className="card-quant">
                <h6 className="quant-name">Status</h6>
                <div className="div-amt">
                    {props.dish.status}
                 </div>
            </div>
            <div className="card-quant">
                <h6 className="quant-name">Date</h6>
                <div className="div-amt">
         
                    {  //      console.log( new Date(props.dish.date.seconds*1000))
                       props.dish.date.toDate().getDate() + " /" +( props.dish.date.toDate().getMonth()+1) + "/"  + props.dish.date.toDate().getYear()
                    }
                 </div>
            </div>
            </div>
       </div>
    );
}

export default OrderCard;