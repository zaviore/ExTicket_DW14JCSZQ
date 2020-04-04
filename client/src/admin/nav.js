import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  Dropdown,
  DropdownButton,
  Image,
  Button,
  ButtonGroup
} from "react-bootstrap";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import profile from "../images/profile.png";
import { connect } from "react-redux";
import { getUser } from "../_action/user";

import "../css/style.css";

class Navber extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  handleLogout = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(true);
  };

  render() {
    const token = localStorage.getItem("token");
    const { data } = this.props.users;
    return (
      <Navbar className="navbar">
        {!token ? <Redirect to="/"></Redirect> : ""}
        <Navbar.Brand href="/" style={{ color: "black", fontWeight: "bold" }}>
          <h4>
            Land<span style={{ color: "#ffd180" }}>Express</span>
          </h4>
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline style={{ marginRight: "20px" }}>
          {" "}
          <b>{data.role}</b> &nbsp; &nbsp;
          <img
            src={profile}
            as={ButtonGroup}
            style={{ width: "40px", margin: "auto" }}
          ></img>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/addticket">Tambah ticket</Dropdown.Item>
              <Dropdown.Item href="/admin">Payment List</Dropdown.Item>
              <Dropdown.Divider />

              <Dropdown.Item as="button" onClick={this.handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Navbar>
    );
  }
}
const mapStateToProps = state => {
  return { users: state.users };
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navber);
