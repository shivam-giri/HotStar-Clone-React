import React, { Component, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./HotStarComponents/AuthComponent/Login";
import Register from "./HotStarComponents/AuthComponent/Register";
import HeaderComponent from "./HotStarComponents/HeaderComponent/Header";
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
