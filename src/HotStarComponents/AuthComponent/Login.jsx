import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Auth-Style.css";
import firebase from "../../Firebase";
import { toast } from "react-toastify";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  //handle change event
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    let { email, password } = this.state;
    try {
      e.preventDefault();
      let userInfo = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userInfo.user.emailVerified) {
        console.log(userInfo);
        // history.push("/"); //not refreshing
        toast.success("successfully logged in");
      } else {
        let errorMessage = `${email} is not verified please verify it`;
        toast.error(errorMessage);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  render() {
    let { email, password } = this.state;
    return (
      <Fragment>
        <section className="authBlock">
          <section className="card col-md-3 mx-auto">
            <article className="form-block">
              <h5 className="h5 font-weight-bold p-4">Login To Continue</h5>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-block btn-outline-primary">
                      Login
                    </button>
                  </div>
                  <div className="form-group">
                    <span>
                      Don't have an account Please
                      <Link
                        to="/register"
                        className="register-link float-right"
                      >
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
