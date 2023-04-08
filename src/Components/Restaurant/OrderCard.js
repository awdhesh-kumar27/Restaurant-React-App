import React, { useEffect, useState } from "react";
import './OrderCard.css';
import DishImg from "../../Assets/dish1.jpg";

const OrderCard = () => {


    const [quantity, setquantity] = useState(1);
    const amount = 50;
    const [totalamount, settotalamount] = useState(amount);
    const [Status, setStatus] = useState("Pending");
    const [newStatus,setnewStatus] = useState("");
    let flag = true;
    const [dropdownItem, setdropdownItem] = useState(["Order-Accepted", "Rejected", "Delievered"]);
    useEffect(() => {
        if (Status == "Pending") {

        } else if (Status == "Order-Accepted") {
            setdropdownItem(["Delievered"]);
        } else if (Status == "Rejected") {
            flag = true;
            setdropdownItem(["Rejected"]);
        } else {
            flag = true;
            setdropdownItem(["Delievered"])
        }
    }, []);

    const statusHandler = (event) => {
        
        setStatus(newStatus);
        console.log("Status : ",Status);
    }

    console.log(dropdownItem);
    const newStatusHandler=(event)=>{
        const status = event.target.value;
        setnewStatus(status);
    }
    
    console.log("newstatus : ",newStatus);
    
   
    return (
        <div>
            <div className="order-card">
                <img className="dish-view-img" src={DishImg}></img>
                <h1 className="card-dish-name">Dish Name</h1>
                <h3 className="card-rest-name">Restaurant Name</h3>
                <h6 className="card-amt">Amount for one</h6>

                <div className="card-quant">
                    <h6 className="quant-name">Quantity</h6>
                    <div className="div-amt">
                        {quantity}
                    </div>
                </div>
                <div className="card-quant">
                    <h6 className="quant-name">Total Amount</h6>
                    <div className="div-amt">
                        {totalamount}
                    </div>
                </div>
                <div className="card-quant">
                    <h6 className="quant-name">Date</h6>
                    <div className="div-amt">
                        Date
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
                <button className="update-btn" onClick={statusHandler}>Update Status</button>
                    

                <div>
            </div>
       </div>

        </div>
    );
}

export default OrderCard;