import React, { Component, Fragment } from "react";
import HeaderComponent from "./HotStarComponents/HeaderComponent/Header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <HeaderComponent />
      </Fragment>
    );
  }
}

export default App;
