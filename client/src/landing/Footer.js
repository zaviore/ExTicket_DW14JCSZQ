import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Register from "./modal/modal_register";
import Login from "./modal/modal_login";
import "../css/style.css";
class Footer extends Component {
  render() {
    return (
      <Navbar className="footer" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline></Form>
      </Navbar>
    );
  }
}
export default Footer;
