import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import firebase from "../../Firebase";
import md5 from "md5";
import { Link } from "react-router-dom";
// import "./Auth-Style.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      phone: "",
      email: ""
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    let { username, password, phone, email } = this.state;
    console.log(phone);

    try {
      e.preventDefault();
      //connecting firebase auth provider
      let userInfo = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      //email verification firebase is having buil-in method sendEmailVerification
      userInfo.user.sendEmailVerification();
      let verifiicationMessage = `A verifiication has been sent to ${email} and please verify it`;
      toast.success(verifiicationMessage);
      console.log(userInfo);

      //update profilr including user photo, phone nunbr, id , whateve
      await userInfo.user.updateProfile({
        displayName: username,
        photoURL: `https://www.gravatar.com/avatar/${md5(
          userInfo.user.email
        )}?d=identicon`
      });
      //save your profile in to firebase realtime database
      await firebase
        .database()
        .ref()
        .child("/users" + userInfo.user.uid)
        .set({
          email: userInfo.user.email,
          photoURL: userInfo.user.photoURL,
          displayName: userInfo.user.displayName,
          uid: userInfo.user.uid,
          registrationDate: new Date().toString()
        });
      this.setState({
        username: "",
        password: "",
        email: ""
      });
    } catch (err) {
      toast.error(err.message);
      console.error(err);
    }
  };

  render() {
    let { username, password, phone, email } = this.state;
    return (
      <Fragment>
        <section className="authBlock">
          <section className="card col-md-3 mx-auto">
            <article className="form-block">
              <h2 className="h5 font-weight-bold p-4">Register to continue</h2>
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
                      value={email}
                      onChange={this.handleChange}
                      placeholder="enter email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={phone}
                      onChange={this.handleChange}
                      placeholder="enter phone"
                      required
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
                    <button className="btn btn-block btn-outline-primary">
                      Register
                    </button>
                  </div>
                  <div className="form-group">
                    <span>
                      Already have an account Please
                      <Link to="/login" className="register-link float-right">
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
