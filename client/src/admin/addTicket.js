import React, { Component } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Navbar from "./nav";
import arrow from "../images/arrow.png";
import "../css/style.css";
import { connect } from "react-redux";
import { getType } from "../_action/typekereta";
import { tambahTicket } from "../_action/addticket";
import { liststation } from "../_action/liststation";
import { getTrain } from "../_action/train";

class addTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      train: "",
      typetrain: "",
      startStation: "",
      dateStart: "",
      startTime: "",
      arrivalTime: "",
      destination: "",
      price: "",
      qty: ""
    };
  }

  handleAddticket = e => {
    e.preventDefault();
    const data = {
      train: this.state.train,
      typetrain: this.state.typetrain,
      startStation: this.state.startStation,
      dateStart: this.state.dateStart,
      startTime: this.state.startTime,
      arrivalTime: this.state.arrivalTime,
      destination: this.state.destination,
      price: this.state.price,
      qty: this.state.qty
    };

    this.props.tambahTicket(data);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.getType();
    this.props.liststation();
    this.props.getTrain();
  }

  render() {
    const { data } = this.props.typekereta;
    const data2 = this.props.Liststation.data;
    const data3 = this.props.train.data;

    return (
      <div>
        <Navbar />
        <hr style={{ border: "1px solid gray", marginTop: "-1px" }}></hr>
        <Container style={{ width: "60%" }}>
          <h2>Tambah Ticket</h2>
          <br></br>
          <Form>
            <Form.Group controlId="kereta">
              <Form.Control
                as="select"
                name="train"
                onChange={this.handleChange}
              >
                {data3.map((value, index) => {
                  return (
                    <option key={index} value={value.id}>
                      {value.name} ({value.types.type_train})
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Control
                as="select"
                name="typetrain"
                onChange={this.handleChange}
              >
                {data.map((value, index) => {
                  return (
                    <option key={index} value={value.id}>
                      {value.type_train}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Control
                as="select"
                name="startStation"
                onChange={this.handleChange}
              >
                {data2.map((value, index) => {
                  return (
                    <option key={index} value={value.id}>
                      {value.name} ({value.code})
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="date kebrangkatan">
              <Form.Control
                type="date"
                placeholder="Tanggal Keberangkatan"
                name="dateStart"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="jam" as={Col}>
                <Form.Control
                  type="time"
                  placeholder="Jam Keberangkatan"
                  name="startTime"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <img
                src={arrow}
                style={{ marginTop: "10px", width: "20px", height: "20px" }}
              ></img>
              <Form.Group controlId="jam tiba" as={Col}>
                <Form.Control
                  type="time"
                  placeholder="Jam Tiba"
                  name="arrivalTime"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="name">
              <Form.Control
                as="select"
                name="destination"
                onChange={this.handleChange}
              >
                {data2.map((value, index) => {
                  return (
                    <option key={index} value={value.id}>
                      {value.name} ({value.code})
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="Harga">
              <Form.Control
                type="text"
                placeholder="Harga ticket"
                name="price"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="qty">
              <Form.Control
                type="text"
                placeholder="Jumlah"
                name="qty"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={this.handleAddticket}
              block
            >
              Tambah
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    typekereta: state.typekereta,
    Liststation: state.Liststation,
    addtickets: state.addtickets,
    train: state.train
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getType: () => dispatch(getType()),
    liststation: () => dispatch(liststation()),
    getTrain: () => dispatch(getTrain()),
    tambahTicket: data => dispatch(tambahTicket(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addTicket);
