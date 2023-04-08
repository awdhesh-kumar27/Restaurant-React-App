
import React from "react";

import './ActiveOrder.css';
import OrderCard from "./OrderCard";
const ActiveOrder = ()=>{
    return (
        <div className="order-dishes">
           <OrderCard></OrderCard>
           <OrderCard></OrderCard>
        </div>
    );
}

export default ActiveOrder;