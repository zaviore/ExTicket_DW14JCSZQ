import React, { Component } from "react";
// import { connect } from "react-redux";
// import { register } from "../../_action/auth";
import detail from "../../images/detail.png";
import barcode from "../../images/barcode.jpg";
import Foto from "../../images/background.png";
import { Button, Modal, Col, Form, Row } from "react-bootstrap";
import Kop from "../../images/kopSurat.png";
import "../../css/style.css";
class detailmodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handlemodal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <Button
          variant=""
          onClick={() => {
            this.handlemodal();
          }}
        >
          <img src={detail} widht="25" height="25"></img>
        </Button>

        <Modal
          show={this.state.show}
          arial-labelledby="contained-modal-title-vcenter"
          dialogClassName="modal-90w"
          onHide={() => this.handlemodal()}
          centered
        >
          <div>
            {" "}
            <img src={Kop}></img>
          </div>

          <div className="modal-title">
            <button
              style={{ marginRight: "15px", marginTop: "-30px" }}
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

          <Modal.Body
            style={{
              marginLeft: "20px",
              "max-height": "calc(120vh - 210px)",
              "overflow-y": "auto"
            }}
          >
            <h2>INVOICE</h2>

            <Row>
              <Col sm={6}>
                <Row>
                  <Col>
                    <b>Kereta Api</b> <br></br>
                    <span style={{ fontSize: "12px" }}>
                      <b>Saturday</b>
                      <p>21 february 2020</p>
                    </span>
                  </Col>
                  <Col>
                    <img src={barcode} width="90px"></img>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <b>Nama Kereta</b>
                    <p>eksekutif (H)</p>
                  </Col>
                  <Col></Col>
                </Row>

                <Row>
                  <Col>
                    <b>05.00</b>
                    <p style={{ fontSize: "12px" }}>21 february 2020</p>
                    <br></br>

                    <b>05.00</b>
                    <p style={{ fontSize: "12px" }}>21 february 2020</p>
                  </Col>
                  <Col>
                    <b>Jakarta</b>
                    <p style={{ fontSize: "12px" }}>gambir</p>
                    <br></br>
                    <b>Surabaya</b>
                    <p style={{ fontSize: "12px" }}>surabaya</p>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <img src={Foto} type="file" width="250px" height="250px"></img>
              </Col>
            </Row>
            <hr></hr>
            <Row style={{ marginTop: "-10px", fontSize: "11px" }}>
              <Col>
                <b> No. Tanda Pegenal</b>
              </Col>
              <Col>
                <b> Nama Pemesan</b>
              </Col>
              <Col>
                <b>No. Handphone</b>
              </Col>
              <Col>
                <b>Email</b>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col md={6}>
                <h4>Total :</h4>
              </Col>
              <Col md={6} style={{ textAlign: "right" }}>
                <h4> Rp. 10000000</h4>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return { auth: state.auth };
// };

// const mapDispatchToProps = dispatch => {
//   return { register: data => dispatch(register(data)) };
// };

export default detailmodal;
