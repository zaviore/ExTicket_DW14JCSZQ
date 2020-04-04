import React, { Component } from "react";
import Ticket from "./Ticket";
import Navbarr from "../landing/navbar";
// import Nav from "../landing/navbar";
import Footer from "../landing/Footer";

import "../css/style.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbarr />
        <hr style={{ border: "1px solid gray", marginTop: "-1px" }}></hr>
        <Ticket />
      </div>
    );
  }
}

export default Profile;
