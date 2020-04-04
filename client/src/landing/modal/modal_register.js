import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../_action/auth";
import { Button, Modal, Col, Form } from "react-bootstrap";

class modal_register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: "",
      show: false
    };
  }

  handleRegis = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address
    };
    //     };

    this.props.register(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlemodal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <Button
          className="regisButton"
          variant="outline-secondary"
          onClick={() => {
            this.handlemodal();
          }}
        >
          {" "}
          Register
        </Button>

        <Modal
          show={this.state.show}
          className="warp-modalReg"
          arial-labelledby="contained-modal-title-vcenter"
          size="sm=30"
          onHide={() => this.handlemodal()}
          centered
        >
          <Modal.Header>
            <div className="header-modal">
              <h1>REGISTER</h1>
            </div>

            <div className="modal-title">
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
            </div>
          </Modal.Header>

          <Modal.Body
            style={{
              "max-height": "calc(100vh - 210px)",
              "overflow-y": "auto"
            }}
          >
            <Form className="form-container" onSubmit={this.handleRegis}>
              <Form.Group controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="name"
                  name="name"
                  onChange={this.handleChange}
                  data-error="request name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="Form data"
                  placeholder="Username"
                  name="username"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}
                  data-error="Request Email"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleChange}
                  data-error="request password"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGender">
                <Form.Label>Gender </Form.Label>
                <Form.Control
                  as="select"
                  name="gender"
                  onChange={this.handleChange}
                >
                  <option> - </option>
                  <option value="male">Male</option>
                  <option value="female">female</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone </Form.Label>
                <Form.Control
                  placeholder="Phone"
                  name="phone"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="address"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" block>
                Register
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { auth: state.auth };
};

const mapDispatchToProps = dispatch => {
  return { register: data => dispatch(register(data)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(modal_register);
