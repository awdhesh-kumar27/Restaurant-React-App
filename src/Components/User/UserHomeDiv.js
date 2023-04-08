
import React from "react";
import DishCard from "./DishCard";
import './UserHomeDiv.css';
import { useFirebase } from "../UserContext/Context";

const UserHomeDiv = ()=>{
    const firebase = useFirebase();
    console.log(firebase.userData);
    return (
        <div className="dishes">
          <DishCard></DishCard>
          <DishCard></DishCard>
          <DishCard></DishCard>
          <DishCard></DishCard>
          <DishCard></DishCard>
          <DishCard></DishCard>
        </div>
    );
}

export default UserHomeDiv;