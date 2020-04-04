import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col, Image } from "react-bootstrap";
import imageSearch from "../images/step.png";
import promo from "../images/promos.jpg";
import promo2 from "../images/promos2.jpg";
import Search from "./search";
import Tabticket from "./tableTicket";
import Slide from "./carousel";
import "../css/style.css";

class Main extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="Jumbo">
            <Col sm={6}>
              <Jumbotron className=" bg-transparent" id="moveJumbo">
                <h2 className="landingTitle">Transaksi Gampang </h2>
                <h1 style={{ color: "white" }}>Dan Aman</h1>
                <p style={{ color: "#FFD180" }}>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <Image
                  src={imageSearch}
                  style={{ width: "300px", marginTop: "-30px" }}
                ></Image>
              </Jumbotron>
            </Col>

            <Col sm={6}>
              <Slide />
            </Col>
          </Row>

          {/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}
          <Container>
            <Row>
              <Col>
                <div className="searchItem">
                  <Search />
                </div>
              </Col>
            </Row>
          </Container>

          <Row>
            <Col>
              <div className="">
                <Tabticket />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
