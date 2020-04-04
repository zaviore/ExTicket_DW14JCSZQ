import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePayment } from "../../_action/admin";
import edit from "../../images/edit.png";
import { Button, Modal, Form } from "react-bootstrap";
import Kop from "../../images/kopSurat.png";
class editmodal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
      show: false,
    };
  }

  handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      status: this.state.status,
    };
    const id = this.props.ids;
    if (data !== null) {
      this.props.updatePayment(data, id);
    }
    window.location.reload(true);
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
          onClick={() => {
            this.handlemodal();
          }}
        >
          <img src={edit} widht="25" height="25"></img>
        </Button>

        <Modal
          show={this.state.show}
          className="warp-modalReg"
          arial-labelledby="contained-modal-title-vcenter"
          size="sm"
          onHide={() => this.handlemodal()}
          centered
        >
          <Modal.Header>
            <img
              src={Kop}
              style={{ marginLeft: "-16px", marginTop: "-16px" }}
            ></img>

            <div className="modal-title">
              <button
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
          </Modal.Header>

          <Modal.Body
            style={{
              "max-height": "calc(100vh - 210px)",
              "overflow-y": "auto",
            }}
          >
            <Form>
              <Form>
                <Form.Group controlId="Id">
                  <Form.Control type="text" value={this.props.id} disabled />
                </Form.Group>

                <Form.Group controlId="name">
                  <Form.Control type="text" value={this.props.name} disabled />
                </Form.Group>

                <Form.Group controlId="tujuan">
                  <Form.Control type="text" value={this.props.start} disabled />
                </Form.Group>

                <Form.Group>
                  <Form.Control type="text" value={this.props.bukti} disabled />{" "}
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    as="select"
                    name="status"
                    onChange={this.handleChange}
                  >
                    <option>Status</option>
                    <option value="Approve">Approve</option>
                  </Form.Control>
                </Form.Group>
                <Modal.Footer>
                  <Button variant="primary" block onClick={this.handleUpdate}>
                    Save
                  </Button>
                </Modal.Footer>
              </Form>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { updatePay: state.admin };
};

const mapDispatchToProps = (dispatch) => {
  return { updatePayment: (data, id) => dispatch(updatePayment(data, id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(editmodal);
