import React, { Component } from "react";
import { connect } from "react-redux";
import { liststation } from "../_action/liststation";
import { getStation } from "../_action/station";

import {
  Row,
  Container,
  Form,
  Col,
  Button,
  InputGroup,
  Image
} from "react-bootstrap";

class search extends Component {
  componentDidMount() {
    this.props.liststation();
  }

  constructor(props) {
    super(props);
    this.state = { valueAsal: "", valueTujuan: "", date: "" };
  }

  handlechangeAsal = e => {
    this.setState({
      valueAsal: e.target.value
    });
  };

  handlechangeTujuan = e => {
    this.setState({
      valueTujuan: e.target.value
    });
    console.log(this.state.valueTujuan);
  };

  handleClick = () => {
    this.setState({
      valueTujuan: this.state.valueAsal,
      valueAsal: this.state.valueTujuan
    });
  };

  Handlesearch = e => {
    e.preventDefault();
    const { valueAsal, valueTujuan, date } = this.state;
    const from = valueAsal;
    const to = valueTujuan;
    this.props.getStation(from, to, date);
  };

  render() {
    const data = this.props.Liststation.data;
    const { data2 } = this.props.Searchh;
    console.log(data2, "tollll");

    return (
      <Container className="Ticket">
        <Container>
          <form>
            <Row>
              <Col
                md={3}
                style={{
                  padding: "15px",
                  borderRight: "2px solid black"
                }}
              >
                <b>Ticket kereta</b>
              </Col>
              <Col
                md={4}
                style={{
                  padding: "15px"
                }}
              >
                <b>Ticket Kereta Api</b>
              </Col>

              <Col md={4}></Col>
            </Row>
            <Row>
              <Col md={3}></Col>
              <Col md={4}>
                <Form.Group
                  as={Col}
                  controlId="kereta"
                  style={{
                    marginTop: "20px"
                  }}
                >
                  <Form.Control
                    as="select"
                    name="asal"
                    value={this.state.valueAsal}
                    onChange={this.handlechangeAsal}
                  >
                    {data.map((value, index) => {
                      return (
                        <option key={index} value={value.id}>
                          {value.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Form.Group controlId="button">
                <br></br>
                <Button
                  variant=""
                  className="searchButton"
                  onClick={this.handleClick}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50px"
                  }}
                >
                  P
                </Button>
              </Form.Group>

              <Col md={4}>
                <Form.Group
                  as={Col}
                  controlId="kereta"
                  style={{
                    marginTop: "20px"
                  }}
                >
                  <Form.Control
                    as="select"
                    name="tujuan"
                    onChange={this.handlechangeTujuan}
                    value={this.state.valueTujuan}
                  >
                    {data.map((value, index) => {
                      return (
                        <option key={index} value={value.id}>
                          {value.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={3}></Col>
              <Col md={4}>
                <Row>
                  <Col md={12}>
                    <Form.Group
                      as={Col}
                      controlId="formGridEmail"
                      style={{ width: "210px" }}
                    >
                      <Form.Label>
                        <b>Date</b>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        placeholder=" DD - MM - YY"
                        size="sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>

              <Col md={5}>
                <Row>
                  <Col md={12}>
                    <br></br>
                    <Button
                      variant=""
                      className="searchButton"
                      type="submit"
                      style={{
                        marginLeft: "260px",
                        width: "70px",
                        height: "40px"
                      }}
                      onClick={e => this.Handlesearch(e)}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { Liststation: state.Liststation, Searchh: state.Search };
};

const mapDispatchToProps = dispatch => {
  return {
    liststation: data => dispatch(liststation(data)),
    getStation: (from, to, date) => dispatch(getStation(from, to, date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(search);
