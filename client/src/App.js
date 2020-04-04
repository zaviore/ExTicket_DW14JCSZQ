import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./landing/Header";
import Main from "./landing/Main";
import Footer from "./landing/Footer";
import Profile from "./profile/Profile";
import Admin from "./admin/main";
import Addticket from "./admin/addTicket";
import Pay from "./profile/payment";
import "./App.css";
import { connect } from "react-redux";
import { getUser } from "./_action/user";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { data } = this.props.users;
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/Home">
            <Home />
          </Route> */}

          <Route exact path="/">
            <div className="imglanding">
              <Header />
              <Main />
              <Footer />
            </div>
          </Route>

          <Route exact path="/ticket">
            <div className="">
              <Profile />
            </div>
          </Route>

          <Route exact path="/payment">
            <div className="">
              <Pay />
            </div>
          </Route>

          <Route exact path="/addticket">
            <div className="">
              <Addticket />
            </div>
          </Route>

          {data.role === "admin" ? (
            <Route exact path="/admin">
              <Admin />
            </Route>
          ) : (
            <Redirect to="/"></Redirect>
          )}
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return { users: state.users };
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
