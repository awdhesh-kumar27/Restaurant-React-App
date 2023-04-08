
import React, { useState } from "react";
import './AddDish.css';

const AddDish = ()=>{

    const [dishName,setDishName] = useState("");
    const [dishPrice,setdishPrice] = useState();
    const [imageName,setImageName] = useState("");

    const dishPriceHandler = (event)=>{
        const price = event.target.value;
        setdishPrice(price);
    }

    const dishNameHandler = (event)=>{
        const dishname = event.target.value;
        setDishName(dishname);
    }
    return (
     <div className="add-dish">
        <div className="add-dish-form">
            <h1 className="add-dish-heading">Add Dish</h1>
          
            <form>
                <div >
                    <label> Dish Name </label>
                    <br></br>
                    <input className="input-box" type="text" name="dishname" value={dishName} onChange = {dishNameHandler} required placeholder="Dish Name"></input>
                </div>
                <div >
                    <label> Price Per Dish</label>
                    <br></br>
                    <input className="input-box" type="number" name="dishprice" value={dishPrice} onChange = {dishPriceHandler} required placeholder="Dish Price"></input>
                </div>
                <div >
                    <label>Image Upload</label>
                    <br></br>
                    <input type="file" name="dishimgupload"></input>
                </div>
                <div>
                        <button className="submit-button" type="submit">Add Dish</button>
                </div>
            </form>
        </div>
        </div>
    );
}

export default AddDish;