
import React,{useState} from "react";
import DishImg from "../../Assets/dish1.jpg";
import './Cart.css';

import CartCard from "./CartCard";


const Delivery = ()=>{


    return (
        <div className="cart-dishes">
            <CartCard></CartCard>
            <CartCard></CartCard>
            <CartCard></CartCard>
        </div>
    );
}

export default Delivery;