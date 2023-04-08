
import React from "react";
import './PastOrder.css';

import OrderHistoryCard from "./OrderHistoryCard";

const PastOrder = ()=>{
    return (
        <div className="past-order-dishes">
          <OrderHistoryCard></OrderHistoryCard>
          <OrderHistoryCard></OrderHistoryCard>
        </div>
    );
}

export default PastOrder;