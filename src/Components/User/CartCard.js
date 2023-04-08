import React,{useState} from "react";

import DishImg from "../../Assets/dish1.jpg";
import './CartCard.css';

const CartCard = () =>{
    const [quantity,setquantity] = useState(1);
    const amount = 50;
    const [totalamount,settotalamount] = useState(amount);

    return (
        <div>
            <div className="cart-card">
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
            <div className="view-btn-div">
            
                <button class='card-view-btn'>Order Now</button>
            </div>
            
            </div>
        </div>
    );
}

export default CartCard;