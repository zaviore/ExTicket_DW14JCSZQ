import React, { Component } from "react";
import { Button, Modal, Navbar, Form } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../css/style.css";
import { connect } from "react-redux";
import { login } from "../../_action/auth";
// import { connect } from "react-redux";
// import { getLogin } from "../_Actions/auth";

class modal_login extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, username: null, password: null };
  }

  handleLogin = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const data = { username, password };

    this.props.login(data);
    window.location.reload(false);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlemodal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <Button
          className="loginButton"
          variant=""
          style={{ textDecoration: "none" }}
          onClick={() => {
            this.handlemodal();
          }}
        >
          LOGIN
        </Button>
        <Modal
          show={this.state.show}
          size="sm"
          onHide={() => this.handlemodal()}
        >
          <Modal.Header>
            <h1>LOGIN</h1>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              onClick={() => {
                this.handlemodal();
              }}
            >
              ×
            </button>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="username"
                  name="username"
                  column
                  sm="2"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              {/* <Link to="/Home"> */}
              <Button variant="" type="submit" className="loginButton" block>
                LOGIN
              </Button>
              {/* </Link> */}
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = (dispatch) => {
  return { login: (data) => dispatch(login(data)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(modal_login);
