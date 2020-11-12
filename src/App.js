import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Login from "./HotStarComponents/AuthComponent/Login";
import Register from "./HotStarComponents/AuthComponent/Register";
import HeaderComponent from "./HotStarComponents/HeaderComponent/Header";

import firebase from "./firebase";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ClickCouter from "./HigherOrderComponent/ClickCouter";
// import HoverCouter from "./HigherOrderComponent/HoverCouter";
import AddMovieForm from "./HotStarComponents/HotStarAdmin/AddMovieForm";

import PasswordReset from "./HotStarComponents/AuthComponent/PasswordReset";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: "" };
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        // this.setState({userData: "no users"});
        console.log("no user");
      }

      if (user) {
        this.setState({ userData: user });
        // this.props.history.push("/");
      } else {
        this.setState({ userData: "" });
        this.props.history.push("/login");
      }
    });
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <header>
          <HeaderComponent user={this.state.userData} />
          {/* <ClickCouter /> */}
          {/* <HoverCouter /> */}
        </header>
        <main>
          <ToastContainer />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/password-reset" component={PasswordReset} />

            {this.state.userData ? (
              <Fragment>
                <Route
                  path="/upload-movies"
                  exact
                  component={() => <AddMovieForm user={this.state.userData} />}
                />
              </Fragment>
            ) : null}
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default withRouter(App);
