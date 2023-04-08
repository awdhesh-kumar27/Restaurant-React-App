import React from "react";
import './RestDishCard.css';

import DishImg from "../../Assets/dish1.jpg";
const RestDishCard=()=>{
    return (
        <div className="dish-card">
             <img className="dish-card-img" src={DishImg}></img>
            <h2 className="card-dish-name">Dish Name</h2>
            <h6 className="card-rest-name">Restaurant Name</h6>
            <h6 className="card-amt">Amount for one</h6>
          <div className="btn-group">
            <button class='card-view-btn'>Edit</button>
            <button class='card-view-btn'>Delete</button>
          </div>
        </div>
    );
}

export default RestDishCard;