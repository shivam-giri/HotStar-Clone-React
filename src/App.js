import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./HotStarComponents/AuthComponent/Login";
import Register from "./HotStarComponents/AuthComponent/Register";
import HeaderComponent from "./HotStarComponents/HeaderComponent/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <header>
          <HeaderComponent />
        </header>
        <main>
          <ToastContainer />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
