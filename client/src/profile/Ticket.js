import React, { Component } from "react";
import "../css/style.css";
import Kop from "../images/kopSurat.png";
import { connect } from "react-redux";
import { getMyticket } from "../_action/myticket";
import { Link } from "react-router-dom";
import Detailmodal from "../profile/tablePayment";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import Barcode from "../images/barcode.jpg";
import moment from "moment";

import idf, { toRupiah } from "indo-formatter";

class Ticket extends Component {
  componentDidMount() {
    this.props.getMyticket();
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  render() {
    const { data } = this.props.myticket;
    console.log(this.props.myticket, "asdasdaaaaaaaaaa");

    const getDuration = (timeA, timeB) => {
      let startTime = moment(timeA, "HH:mm");
      let endTime = moment(timeB, "HH:mm");
      let duration = moment.duration(endTime.diff(startTime));
      let hours = parseInt(duration.asHours());
      let minutes = parseInt(duration.asMinutes()) - hours * 60;
      return `${hours} Jam ${minutes} Menit`;
    };
    return (
      <div>
        {this.props.myticket.data ? (
          console.log(this.props.myticket.data)
        ) : (
          <h1>loading</h1>
        )}
        <Container>
          <h3>TIKET SAYA</h3>
        </Container>
        {data.map((value, index) => (
          <Container style={{ width: "60%" }}>
            <br></br>
            <Container className="ticketclient">
              <Row>
                <Col md="9">
                  <Image src={Kop} style={{ marginLeft: "-15px" }}></Image>
                </Col>
                <Col md="3">
                  <b>KERETA API</b>
                  <p>
                    {" "}
                    {moment(value.idstation.dateStart).format("do MMMM YYYY")}
                  </p>
                </Col>
              </Row>

              <Row>
                <Col md="2">
                  <b>{value.idstation.names.name}</b>
                  <p>{value.idstation.names.types.type_train}</p>
                  {value.status === "pending" ? (
                    <p
                      style={{
                        fontSize: "10px",
                        backgroundColor: "#FFD180",
                        padding: "2px",
                        borderRadius: "4px",
                        color: "red",
                        textAlign: "center",
                        opacity: "0.5"
                      }}
                    >
                      {value.status}
                    </p>
                  ) : (
                    <p
                      style={{
                        fontSize: "10px",
                        backgroundColor: "green",
                        padding: "2px",
                        borderRadius: "4px",
                        color: "white",
                        textAlign: "center",
                        opacity: "0.5"
                      }}
                    >
                      {value.status}
                    </p>
                  )}
                </Col>
                <Col md="4">
                  <ul id="progress">
                    <li>
                      <div className="node grey"></div>
                      <p>
                        <b>{value.idstation.startTime}</b>
                      </p>
                      <p style={{ fontSize: "10px" }}>
                        {moment(value.idstation.dateStart).format(
                          "do MMMM YYYY"
                        )}
                      </p>
                    </li>
                    <li>
                      <div className="divider grey"></div>
                    </li>
                    <li>
                      <div className="node red"></div>
                      <p>
                        <b>{value.idstation.arrivalTime}</b>
                      </p>
                      <p style={{ fontSize: "10px" }}>
                        {" "}
                        {moment(value.idstation.dateStart).format(
                          "do MMMM YYYY"
                        )}
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <b>
                    {value.idstation.start.city} ({value.idstation.start.code})
                  </b>
                  <p style={{ fontSize: "10px", marginTop: "" }}>
                    Stasiun {value.idstation.start.name}
                  </p>

                  <b>
                    {value.idstation.destiny.city} (
                    {value.idstation.destiny.code})
                  </b>
                  <p style={{ fontSize: "10px", marginTop: "" }}>
                    Stasiun {value.idstation.destiny.name}
                  </p>
                </Col>
                {value.status === "pending" ? (
                  ""
                ) : (
                  <Col>
                    <img
                      src={Barcode}
                      width="130px"
                      style={{ marginLeft: "20px" }}
                    ></img>
                  </Col>
                )}
              </Row>
              <Row style={{ fontSize: "13px" }}>
                <Col>No. Tanda Pengenal</Col>
                <Col>Nama Pemesan</Col>
                <Col>No. Handphone </Col>
                <Col>Email</Col>
                <Col></Col>
              </Row>
              <hr
                style={{ marginLeft: "-15px", width: "80%", marginTop: "1px" }}
              ></hr>
              <Row style={{ marginTop: "-15px" }}>
                <Col>1223331111</Col>
                <Col>{value.iduser.name}</Col>
                <Col>{value.iduser.phone}</Col>
                <Col>{value.iduser.email}</Col>
                <Col style={{ margin: 10 }}>
                  <Detailmodal
                    ticketid={value.id}
                    nameTrain={value.idstation.names.name}
                    typeTrain={value.idstation.names.types.type_train}
                    startTm={value.idstation.startTime}
                    startTgl={moment(value.idstation.dateStart).format(
                      "do MMMM YYYY"
                    )}
                    arrivalTm={value.idstation.arrivalTime}
                    startCity={value.idstation.start.city}
                    startStation={value.idstation.start.name}
                    codeStartCity={value.idstation.start.code}
                    lastCity={value.idstation.destiny.city}
                    lastStation={value.idstation.destiny.name}
                    codelastCity={value.idstation.destiny.code}
                    nameUser={value.iduser.name}
                    phoneUser={value.iduser.phone}
                    emailUser={value.iduser.email}
                    Totalbayar={value.total}
                    qty={value.qty}
                    prices={value.idstation.price}
                  />
                </Col>
              </Row>
            </Container>
          </Container>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myticket: state.myticket
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMyticket: () => dispatch(getMyticket())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
