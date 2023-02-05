import React from "react";
import "./OrderDetails.css";


const OrderDetails = ({Title, Qty ,Price})=> {
  return (
    <div>
      <div className="OrderDetailsBody flex justfy">
        <h6>{Title}</h6>
        <h6 >x{Qty}</h6>
        <h6 >₹{Price}</h6>
      </div>
      
    </div>
  );
}


export default OrderDetails;
