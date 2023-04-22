import React from "react";
import './DishCard.css';
import DishImg from "../../Assets/dish1.jpg";
import { useNavigate } from "react-router-dom";



const  DishCard = (props) =>{
    const navigate = useNavigate();
    return(
        <div class="dish-card">
            <img className="dish-card-img" src={DishImg}></img>
            <h2 className="card-dish-name">{props.dish.dishName}</h2>
            <h6 className="card-rest-name">{props.dish.restName}</h6>
            <h6 className="card-amt">Amount for one : {props.dish.dishPrice}</h6>
            <button class='card-view-btn' onClick={(event)=> navigate(`/UserHome/view/${props.dish.id}`)}>view</button>
        </div>
    );
}

export default DishCard;