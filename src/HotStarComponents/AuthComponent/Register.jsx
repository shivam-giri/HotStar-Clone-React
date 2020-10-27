import React, { Component, Fragment } from "react";

import firebase from "../../Firebase";

import { Link } from "react-router-dom";
import "./Auth-Style.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    try {
      let { username, password, email } = this.state;
      e.preventDefault();
      //connecting firebase auth provider
      let userData = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(userData);

      this.setState({
        username: "",
        password: "",
        email: ""
      });
    } catch (err) {
      console.error(err);
    }
  };
  render() {
    let { username, password, email } = this.state;
    return (
      <Fragment>
        <section className="loginBlock">
          <section className="card col-md-3 mx-auto">
            <article className="form-block">
              <h2>Register</h2>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="enter username"
                      value={username}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                      value={email}
                      onChange={this.handleChange}
                      placeholder="enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="enter password"
                      value={password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-block btn-primary">
                      Register
                    </button>
                  </div>
                  <div className="form-group">
                    <span>
                      Already have an account Please
                      <Link to="/login" className="register-link">
                        Login
                      </Link>
                    </span>
                  </div>
                </form>
              </div>
            </article>
          </section>
        </section>
      </Fragment>
    );
  }
}

export default Register;
