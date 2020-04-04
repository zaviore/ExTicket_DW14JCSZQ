import React, { Component } from "react";
import { Navbar, Nav, Form, Dropdown } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { getUser } from "../_action/user";

import "../css/style.css";

class navbar extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload(false);
  };

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { data, loading } = this.props.users;
    if (loading) return <>now loading!!</>;
    const token = localStorage.getItem("token");
    return (
      <Navbar className="navbar">
        {!token ? <Redirect to="/"></Redirect> : ""}

        <Nav className="mr-auto"></Nav>
        <Form inline style={{ marginRight: "20px" }}>
          {" "}
          <Dropdown alignRight>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <b style={{ color: "black" }}> {data.name} </b>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/ticket">Tiket Saya</Dropdown.Item>

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

const mapStateToProps = (state) => {
  return { users: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
