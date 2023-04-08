import React from "react";
import './DishCard.css';
import DishImg from "../../Assets/dish1.jpg";
const  DishCard = () =>{
    return(
        <div class="dish-card">
            <img className="dish-card-img" src={DishImg}></img>
            <h2 className="card-dish-name">Dish Name</h2>
            <h6 className="card-rest-name">Restaurant Name</h6>
            <h6 className="card-amt">Amount for one</h6>
            <button class='card-view-btn'>view</button>
        </div>
    );
}

export default DishCard;