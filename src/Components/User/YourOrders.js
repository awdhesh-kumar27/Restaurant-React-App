
import React from "react";

import OrderCard from "./OrderCard";
import './YourOrders.css';

const YourOrders = ()=>{
    return (
        <div className="order-dishes">
           <OrderCard></OrderCard>
           <OrderCard></OrderCard>
        </div>
    );
}

export default YourOrders;