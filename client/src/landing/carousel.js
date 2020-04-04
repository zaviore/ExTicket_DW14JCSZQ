import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import promo from "../images/promos2.jpg";
import promo2 from "../images/promos4.jpg";

// import { connect } from "react-redux";
// import { getLogin } from "../_Actions/auth";

class carousels extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  render() {
    return (
      <Container>
        <Carousel style={{ width: "85%", height: "85%", marginTop: "10px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={promo}
              alt="First slide"
              style={{ width: "600px", height: "300px" }}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={promo2}
              alt="Third slide"
              style={{ width: "600px", height: "300px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
export default carousels;
