import React, { Component } from "react";
import { connect } from "react-redux";
import { addPayment } from "../../_action/payment";
import { Button, Modal, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Modal_buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qtt: "",
      date: "",
      showlin: false,
      show: false,
    };
  }

  handleBuy = (e) => {
    e.preventDefault();

    const data = {
      id_station: this.props.ticketid,
      qtt: this.state.qtt,
      date: new Date(),
    };

    this.props.addPayment(data);
    this.setState({ showlin: true, show: false });
  };

  handleChange = (e) => {
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
          Buy
        </Button>

        <Modal show={this.state.showlin}>
          <Modal.Body>Silahkan lakukan pembayaran</Modal.Body>
          <Modal.Footer>
            <Link to="/ticket">
              <button>ok</button>
            </Link>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.show}
          className="warp-modalReg"
          arial-labelledby="contained-modal-title-vcenter"
          size="sm=30"
          onHide={() => this.handlemodal()}
          centered
        >
          <Modal.Body
            data-dismiss="modal"
            style={{
              "max-height": "calc(100vh - 210px)",
              "overflow-y": "auto",
            }}
          >
            <Form className="form-container" onSubmit={this.handleBuy}>
              <Row>
                <Col>
                  {" "}
                  <Form.Control
                    style={{ fontWeight: "bold" }}
                    value={this.props.train}
                    name="kereta"
                    onChange={this.handleChange}
                    plaintext
                    readOnly
                  />
                  | {this.props.typetrain} |
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    type="text"
                    value={this.props.startTime}
                    name="starttime"
                    onChange={this.handleChange}
                    plaintext
                    readOnly
                  />
                </Col>
                <Col>
                  <Form.Control
                    style={{ fontWeight: "bold", fontSize: "20px" }}
                    type="text"
                    name="tiba"
                    onChange={this.handleChange}
                    value={this.props.arrivalTime}
                    plaintext
                    readOnly
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    style={{ fontSize: "14px" }}
                    type="text"
                    name="start"
                    onChange={this.handleChange}
                    value={this.props.start}
                    plaintext
                    readOnly
                  />{" "}
                  <p style={{ fontSize: "14px" }}>({this.props.code})</p>
                </Col>
                <Col>
                  <Form.Control
                    style={{ fontSize: "14px" }}
                    type="text"
                    name="start"
                    onChange={this.handleChange}
                    value={this.props.destiny}
                    plaintext
                    readOnly
                  />
                  ( {this.props.code2} )
                </Col>
              </Row>

              <br></br>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Harga"
                  name="harga"
                  value={this.props.price}
                  onChange={this.handleChange}
                  disabled
                />
              </Form.Group>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Jumlah</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Harga"
                  name="qtt"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Beli
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { paymentt: state.paymentt };
};
const mapDispatchToProps = (dispatch) => {
  return { addPayment: (data) => dispatch(addPayment(data)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal_buy);
