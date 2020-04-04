import React, { Component } from "react";
import Pay from "./tablePayment";
import Navbar from "../landing/navbar";

import "../css/style.css";

class Payment extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <hr style={{ border: "1px solid gray", marginTop: "-1px" }}></hr>
        <Pay />
      </div>
    );
  }
}

export default Payment;
