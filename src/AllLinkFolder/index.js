import React from "react";
import OrderDetails from "./OrderDetails";
import "./index.css";
import "./OrderDetails.css";

const orderItem = [
  { Title: "Chicken briyani", Qty: 1, Price: 250 },
  { Title: "Mutton briyani",  Qty: 1, Price: 450 },
  { Title: "Egg briyani",     Qty: 1, Price: 150 },
];

function IndexBody() {
  return (
    <div className="OderListBodyContainer1 ">
      <h5>ORDER DETAILS :</h5>
      <hr />
      <OrderDetails {...orderItem[0]} />
      <OrderDetails {...orderItem[1]} />
      <OrderDetails {...orderItem[2]} />
      <hr />
      <div className="OrderDetailsTaxBody">
        <h6>SELECTED AMOUNT: ₹850</h6>
        <h6>GST % 85:</h6>
        <h6>VAT : 15</h6>
      </div>
      <hr />
      <div className="OrderDetailsTOTAL flex">
        <h6>TOTAL AMOUNT : </h6>
        <input placeholder="900"></input>
      </div>
      <hr />
      <div class="col flex">
        <h6>APPLY COUPON :</h6>
        <label for="inputPassword2" class="visually-hidden"></label>   {" "}
        <input
          type="password"
          class="form-control"
          id="inputPassword2"
          placeholder="Apply Coupon %"
        ></input>
      </div>
      <hr />
      <div className="d-grid gap-2">
        <button type="button  " class="btn btn-warning">
          ORDER CONFIRM
        </button>
      </div>
    </div>
  );
}

export default IndexBody;
