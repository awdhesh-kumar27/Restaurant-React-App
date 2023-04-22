import React from "react";
import './RestDishCard.css';
import { useFirebase } from "../UserContext/Context";
import { useNavigate } from "react-router-dom";
import DishImg from "../../Assets/dish1.jpg";
const RestDishCard=(props)=>{
      // console.log(props.dish);
       const navigate = useNavigate();
       const firebase = useFirebase();
       const dishDeleteHandler = async (event)=>{
        event.preventDefault();
       await firebase.deleteRestDish(props.dish.id);
      navigate("/RestaurantHome");
      console.log("dish Deleleted Successfully");
  }
    return (
        <div className="dish-card">
             <img className="dish-card-img" src={DishImg}></img>
            <h2 className="card-dish-name">{props.dish.dishName}</h2>
            <h6 className="card-rest-name">Rest Name </h6>
            <h6 className="card-amt">Price for One {" "} {props.dish.dishPrice}</h6>
          <div className="btn-group">
            <button class='card-view-btn'>Edit</button>
            <button class='card-view-btn' onClick={dishDeleteHandler}>Delete</button>
          </div>
        </div>
    );
}

export default RestDishCard;