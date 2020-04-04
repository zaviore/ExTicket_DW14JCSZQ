import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Buy from "./modal/modal_buy";
import { connect } from "react-redux";
import { getStation } from "../_action/station";
import moment from "moment";
import { toRupiah } from "indo-formatter";
class tableTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      date: "",
    };
  }

  componentDidMount() {
    const { from, to, date } = this.state;
    this.props.stations(from, to, date);
  }

  render() {
    const getDuration = (timeA, timeB) => {
      let startTime = moment(timeA, "HH:mm");
      let endTime = moment(timeB, "HH:mm");
      let duration = moment.duration(endTime.diff(startTime));
      let hours = parseInt(duration.asHours());
      let minutes = parseInt(duration.asMinutes()) - hours * 60;
      return `${hours} Jam ${minutes} Menit`;
    };

    const { data } = this.props.station;
    const { user } = this.props.users;

    return (
      <Container style={{ padding: "20px", textAlign: "center" }}>
        <br></br>
        <Row style={{ padding: "10px" }}>
          <Col>
            <b>Nama Kereta</b>
          </Col>
          <Col>
            <b>Berangkat</b>
          </Col>
          <Col md="1"> </Col>
          <Col>
            <b>Tiba</b>
          </Col>
          <Col>
            <b>Durasi</b>
          </Col>
          <Col>
            <b>Harga Per Orang</b>
          </Col>
          {user == true ? <Col></Col> : ""}
        </Row>

        {data.map((value, index) => {
          return (
            <Row className="indexTicket mt-3">
              <Col style={{ marginTop: "15px " }}>
                {value.names.name}
                <p>({value.names.types.type_train})</p>
              </Col>
              <Col style={{ marginTop: "15px " }}>
                <p>{moment(value.startTime, "HH:mm").format("LT")}</p>
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  {value.start.name} ({value.start.code})
                </p>
              </Col>
              <Col md="1" style={{ marginTop: "20px " }}>
                ->
              </Col>
              <Col style={{ marginTop: "15px " }}>
                <p>{moment(value.arrivalTime, "HH:mm").format("LT")}</p>
                <p style={{ fontSize: "12px" }}>
                  {" "}
                  {value.destiny.name} ({value.destiny.code})
                </p>
              </Col>
              <Col style={{ marginTop: "30px " }}>
                {getDuration(value.startTime, value.arrivalTime)}
              </Col>
              <Col style={{ marginTop: "30px " }}>{toRupiah(value.price)}</Col>
              {user == true ? (
                <Col style={{ marginTop: "30px " }}>
                  <Buy
                    ticketid={value.id}
                    typetrain={value.names.types.type_train}
                    arrivalTime={value.arrivalTime}
                    train={value.names.name}
                    startTime={value.startTime}
                    start={value.start.name}
                    code={value.start.code}
                    destiny={value.destiny.name}
                    code2={value.destiny.code}
                    duration={getDuration(value.startTime, value.arrivalTime)}
                    price={toRupiah(value.price)}
                  />
                </Col>
              ) : (
                ""
              )}{" "}
            </Row>
          );
        })}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return { station: state.station, users: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return { stations: (from, to, date) => dispatch(getStation(from, to, date)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(tableTicket);
