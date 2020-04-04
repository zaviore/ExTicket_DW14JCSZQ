import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Register from "./modal/modal_register";
import UserNav from "./navbar";
import Login from "./modal/modal_login";
import "../css/style.css";
import { connect } from "react-redux";
import { getUser } from "../_action/user";

class Header extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handlemodal() {
    this.setState({ show: true });
  }

  render() {
    const { data, isLogin } = this.props.users;
    return (
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand href="/" style={{ color: "black", fontWeight: "bodl" }}>
          <h4>
            Land<span style={{ color: "#ffd180" }}>Express</span>
          </h4>
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          {data.role === "admin" ? (
            <>
              {/* <Admin /> */}
              <Redirect to="/admin" />
            </>
          ) : isLogin ? (
            <UserNav />
          ) : (
            <>
              <Register /> &nbsp;
              <Login />
            </>
          )}
        </Form>
      </Navbar>

      // <div show={this.state.show} >
      // <Bavbar />
      // <Home2 />
      // <Footer />
      // </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
