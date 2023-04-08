import React, { useState } from "react";
import './DishView.css';
import DishImg from "../../Assets/dish1.jpg";

const DishView = () =>{

    const [quantity,setquantity] = useState(1);
    const amount = 50;
    const [totalamount,settotalamount] = useState(amount);

    const iquantityHandler =  (event)=>{
           event.preventDefault();
           if(quantity<8){
            setquantity(quantity+1);
            settotalamount((quantity+1)*amount);
        }
           console.log(quantity);
    }

    const dquantityHandler = (event) =>{
        event.preventDefault();
        if(quantity>1){
            setquantity(quantity-1);
          settotalamount((quantity-1)*amount);
       
        }
    }

    return (
        <div>
            <div className="dish-view">
             <img className="dish-view-img" src={DishImg}></img>
             <h1 className="card-dish-name">Dish Name</h1>
             <h3 className="card-rest-name">Restaurant Name</h3>
             <h6 className="card-amt">Amount for one</h6>
             <div className="card-quant">
                <h6 className="quant-name">Quantity</h6>
                <div className="div-incre">

                    <button onClick={ iquantityHandler} className="btn-incre">+</button>
                     {' '}{quantity}{' '}
                    <button onClick={dquantityHandler} className="btn-incre">-</button>
                </div>
            </div>
             <div className="card-quant">
                <h6 className="quant-name">Total Amount</h6>
                <div className="div-amt">
                    {totalamount}
                 </div>
            </div>
            <div className="view-btn-div">
                <button class='card-view-btn'>Add to Cart</button>
                <button class='card-view-btn'>Order Now</button>
            </div>
            
            </div>
        </div>
    );
}

export default DishView;