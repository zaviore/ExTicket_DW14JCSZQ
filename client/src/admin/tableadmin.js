import React, { Component } from "react";
import { Button, Table, Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { listpayment } from "../_action/admin";
import Edit from "./modal/editmodal";
import hapus from "../images/hapus.png";
import Detail from "./modal/detailmodal";

class tableTicket extends Component {
  handleDetail() {
    this.setState({ detail: !this.state.detail });
  }

  componentDidMount() {
    this.props.listpayment();
  }

  render() {
    const { data } = this.props.list;
    return (
      <Container style={{ padding: "20px", width: "100%" }}>
        <Table responsive>
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Ticket</th>
              <th>Bukti Transfer</th>
              <th>Status Pembayaran</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((value, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{value.iduser.name}</td>
                <td>
                  {value.idstation.start.city} - {value.idstation.destiny.city}
                </td>
                <td>{value.attachment}</td>
                <td>{value.status}</td>
                <td>
                  <Row style={{ width: "210px" }}>
                    <Col md={3}>
                      <Edit
                        ids={value.id}
                        id={index + 1}
                        name={value.iduser.name}
                        start={`${value.idstation.start.city} - ${value.idstation.destiny.city}`}
                        // destiny={value.idstation.destiny.city}
                        bukti={value.attachment}
                        status={value.status}
                      />
                    </Col>
                    <Col md={3}>
                      <Detail />
                    </Col>
                    <Col md={3}>
                      <Button variant="" href="/asdasd">
                        <img src={hapus} widht="25" height="25"></img>
                      </Button>
                    </Col>
                  </Row>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return { list: state.admin };
};

const mapDispatchToProps = (dispatch) => {
  return { listpayment: (data) => dispatch(listpayment(data)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(tableTicket);
