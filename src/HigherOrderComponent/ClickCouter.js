import React, { Component, Fragment } from "react";
import withCounter from "./withCounter";

class ClickCouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { count, IncrementCounter, changeText } = this.props;
    return (
      <Fragment>
        <button className="btn btn-danger" onClick={IncrementCounter}>
          Click ME {count} {changeText}
        </button>
      </Fragment>
    );
  }
}

export default withCounter(ClickCouter);
