
import React from "react";

import RestDishCard from "./RestDishCard";

import './ActiveDish.css';

const ActiveDish = ()=>{
    return (
        <div className="active-dishes">
            <RestDishCard></RestDishCard>
            <RestDishCard></RestDishCard>
            <RestDishCard></RestDishCard>
        </div>
    );
}

export default ActiveDish;