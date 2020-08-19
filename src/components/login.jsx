import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errors: "",
    };
  }
  InputHandler = (event) => {
    console.log(this.state);
    this.setState({ ...this.state, username: event.target.value });
  };
  InputPasswordChange = (event) => {
    console.log(this.state);
    this.setState({ ...this.state, password: event.target.value });
  };
  formSubmit = (event) => {
    //console.log(event.target.value);
    alert(`username:${this.state.username} password:${this.state.password}`);
    //alert("login successfully");
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <h1 className="text-center">LOGIN PAGE</h1>
            <form
              className="form-group border border-danger p-5 mt-0 bg-info shadow-sm rounded m-6"
              onSubmit={this.formSubmit}
            >
              <div className="form-group">
                Username:
                <input
                  type="text"
                  className=""
                  className="form-control"
                  onChange={this.InputHandler}
                />
              </div>

              <div className="form-group">
                Password:
                <input
                  type="password"
                  className=""
                  onChange={this.InputPasswordChange}
                  align="center"
                  className="form-control"
                />
              </div>

              <button type="submit" className="btn btn-block btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default Login;
