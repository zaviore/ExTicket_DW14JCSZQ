import React, { Component } from "react";
import Tableadmin from "./tableadmin";
import Navbar from "./nav";

import "../css/style.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <hr style={{ border: "1px solid gray", marginTop: "-1px" }}></hr>
        <Tableadmin />
      </div>
    );
  }
}

export default Profile;
