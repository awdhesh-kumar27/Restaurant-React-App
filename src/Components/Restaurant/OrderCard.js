import React, { useEffect, useState } from "react";
import './OrderCard.css';
import DishImg from "../../Assets/dish1.jpg";
import { useFirebase } from "../UserContext/Context";
import { useNavigate } from "react-router-dom";

const OrderCard = (props) => {

    const firebase = useFirebase();
    const navigate = useNavigate();
    const [quantity, setquantity] = useState(1);
    const amount = 50;
    const [totalamount, settotalamount] = useState(amount);
    const [Status, setStatus] = useState(props.dish.status);
    const [newStatus,setnewStatus] = useState("");
    let flag = true;
   
    const [dropdownItem, setdropdownItem] = useState(["Order-Accepted", "Rejected", "Delievered"]);
     
    console.log(props.dish);

    useEffect(() => {
        if (Status == "Pending") {

        } else if (Status == "Order-Accepted") {
            setdropdownItem(["Delievered","Rejected"]);
          
        } else if (Status == "Rejected") {
            flag = true;
            setdropdownItem(["Rejected"]);
            setnewStatus("Rejected");
        } else {
            flag = true;
            setdropdownItem(["Delievered"])
            setnewStatus("Delievered")
        }
    }, []);

    const statusHandler = async(event) => {
        event.preventDefault();
        setStatus(newStatus);
        console.log("Status : ",Status);
        await firebase.updateOrderById(props.dish.id,newStatus); 
        navigate("/RestaurantHome");
    }

    console.log(dropdownItem);
    const newStatusHandler=(event)=>{
        const status = event.target.value;
        console.log(event.target.value);
        setnewStatus(status);
        console.log(status);
    }
    
  //  console.log("newstatus : ",newStatus);
    
   
    return (
        <div>
            <div className="order-card">
                <img className="dish-view-img" src={DishImg}></img>
                <h1 className="card-dish-name">{props.dish.dishName}</h1>
                <h3 className="card-rest-name">{props.dish.restName}</h3>
                <h6 className="card-amt">Amount for one : {props.dish.dishPrice}</h6>

                <div className="card-quant">
                    <h6 className="quant-name">Quantity</h6>
                    <div className="div-amt">
                    {props.dish.dishQuantity}
                    </div>
                </div>
                <div className="card-quant">
                    <h6 className="quant-name">Total Amount</h6>
                    <div className="div-amt">
                        {props.dish.dishTotalPrice}
                    </div>
                </div>
                <div className="card-quant">
                    <h6 className="quant-name">Date</h6>
                    <div className="div-amt">
                    {  //      console.log( new Date(props.dish.date.seconds*1000))
                       props.dish.date.toDate().getDate() + " /" +( props.dish.date.toDate().getMonth()+1) + "/"  + props.dish.date.toDate().getYear()
                    }
                    </div>
                </div>
                <div className="card-quant">
                    <h6 className="quant-name">Status</h6>
                    <div className="div-amt">

                     
                            <select id="status" name="status" onChange={newStatusHandler}>
                                {
                                    dropdownItem.map((item) => (

                                        <option value={item}>{item}</option>
                                    ))
                                }

                            </select>
                           
                    </div>

                </div>
             <div>
                <button className="update-btn" onClick={statusHandler}>Update Status</button>
                 </div>   

                <div>
            </div>
       </div>

        </div>
    );
}

export default OrderCard;