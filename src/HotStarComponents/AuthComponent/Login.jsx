import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Auth-Style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <section className="loginBlock">
          <section className="card col-md-3 mx-auto">
            <article className="form-block">
              <h2>Login</h2>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-block btn-primary">Login</button>
                  </div>
                  <div className="form-group">
                    <span>
                      Don't have an account Please
                      <Link to="/register" className="register-link">
                        Register
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

export default Login;
