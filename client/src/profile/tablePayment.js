import React, { Component } from "react";
import { connect } from "react-redux";
import { postPhoto } from "../_action/upload";

import warning from "../images/warning.png";
import Kop from "../images/kopSurat.png";
import Stapper from "../images/stepper.jpg";
import bukti from "../images/bukti.jpg";
import barcode from "../images/barcode.jpg";

import { Button, Card, Col, Container, Row, Modal } from "react-bootstrap";

import "../css/style.css";
class detailmodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: null,
      preview: null,
      show: false,
    };
  }

  handleUpload = (e) => {
    const formData = new FormData();
    formData.append("id", this.props.ticketid);
    alert("success!!, waiting approve from admin");
    formData.append("payment", this.state.file);
    //     };

    this.props.postPhoto(formData);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlemodal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <>
        <Button
          variant=""
          style={{
            backgroundColor: "#6C63FF",
            color: "white",
            padding: "5px",
            width: "80px",
          }}
          onClick={() => {
            this.handlemodal();
          }}
        >
          Bayar
        </Button>

        <Modal
          show={this.state.show}
          className="warp-modalReg"
          arial-labelledby="contained-modal-title-vcenter"
          size="xl"
          onHide={() => this.handlemodal()}
          centered
        >
          <Modal.Body
            style={{
              "overflow-y": "auto",
            }}
          >
            <Container>
              <h2>INVOICE</h2>

              <Row>
                <Col md={8}>
                  <Container>
                    <Card>
                      <Card.Body>
                        <Row>
                          <Col sm={2}>
                            <img src={warning} width="60px"></img>
                          </Col>
                          <Col sm={9}>
                            Silahkan melakukan pembayaran melalui M-banking dan
                            ATM ke No. Rek yang tertera :<br></br>
                            <br></br>
                            No.Rek : 098999888
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Container>
                  <Container style={{ marginTop: "20px" }}>
                    <Card>
                      <Row>
                        <Col>
                          <img src={Kop}></img>
                        </Col>
                      </Row>
                      <Card.Body>
                        <Row className="bb mt-2" style={{ fontSize: "13px" }}>
                          <Col>
                            <b>Tanda Pengenal</b>
                          </Col>
                          <Col>
                            <b>Nama Pengenal</b>
                          </Col>
                          <Col>
                            <b>No.handphone</b>
                          </Col>
                          <Col>
                            <b>email</b>
                          </Col>
                        </Row>
                        <hr style={{ width: "100%", marginTop: "5px" }}></hr>
                        <Row className="bb mt-2" style={{ fontSize: "13px" }}>
                          <Col>14410203112121</Col>
                          <Col>{this.props.nameUser}</Col>
                          <Col>{this.props.phoneUser}</Col>
                          <Col>{this.props.emailUser}</Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Container>

                  <Container className="bb mt-5">
                    <h4>RINCIAN HARGA</h4>
                    <Row>
                      <Col>
                        <Card>
                          <Card.Body>
                            <Row>
                              <Col sm={6}>
                                <p style={{ fontSize: "13px" }}>
                                  {this.props.nameTrain} (Dewasa) x{" "}
                                  {this.props.qty}
                                </p>
                              </Col>
                              <Col sm={6}>Rp. {this.props.prices}</Col>
                            </Row>
                          </Card.Body>
                          <Card.Footer>
                            <Row>
                              <Col sm={6}>Total</Col>
                              <Col sm={6}>
                                <b style={{ fontSize: "17px" }}>
                                  Rp. {this.props.Totalbayar}
                                </b>
                              </Col>
                            </Row>
                          </Card.Footer>
                        </Card>
                        <br></br>
                        {/* dddddddddddddddddddddddddddddddddddddddddddddd */}
                        <Button block onClick={this.handleUpload}>
                          Bayar
                        </Button>
                      </Col>
                      <Col>
                        <img
                          src={this.state.preview}
                          width="120px"
                          height="100px"
                          className="pp mb-5"
                        ></img>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          name="payment"
                          onChange={(e) => {
                            this.setState({
                              file: e.target.files[0],
                              preview: URL.createObjectURL(e.target.files[0]),
                            });
                            console.log(e.target);
                          }}
                        ></input>
                      </Col>
                      {/* dddddddddddddddddddddddddddddddddddddddddddddd */}
                    </Row>
                  </Container>
                </Col>

                <Col md={4}>
                  <Card>
                    <Card.Header>
                      <Row style={{ fontSize: "17px" }}>
                        <Col sm={8}>
                          <b style={{ fontSize: "24px" }}>Kereta Api</b>
                          <p>{this.props.startTgl}</p>
                        </Col>
                        <Col sm={4}>
                          <img src={barcode} width="90px"></img>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body>
                      <Row style={{ fontSize: "15px" }}>
                        <Col>
                          <b>{this.props.nameTrain}</b>
                          <p>{this.props.typeTrain}</p>
                        </Col>
                      </Row>

                      <Row>
                        <Col sm={2}>
                          <img src={Stapper} width="15px"></img>
                        </Col>
                        <Col>
                          <Row style={{ fontSize: "13px" }}>
                            <Col>
                              <b>{this.props.startTm}</b>
                              <p>{this.props.startTgl}</p>
                            </Col>
                            <Col>
                              <b>{this.props.arrivalTm}</b>
                              <p>{this.props.startTgl}</p>
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Row style={{ fontSize: "13px" }}>
                            <Col>
                              <b>
                                {this.props.startCity} (
                                {this.props.codeStartCity})
                              </b>
                              <p>stasiun {this.props.startStation}</p>
                            </Col>
                            <Col>
                              <b>
                                {" "}
                                {this.props.lastCity} ({this.props.codelastCity}
                                )
                              </b>
                              <p>stasiun {this.props.lastStation}</p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { upload: state.UploadPhotos };
};

const mapDispatchToProps = (dispatch) => {
  return { postPhoto: (formData) => dispatch(postPhoto(formData)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(detailmodal);
