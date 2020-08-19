import React, { Component } from "react";
//import React from "react";
class Upskill extends Component {
  constructor(props) {
    super(props);

    this.state = { first: "", second: "", third: "", fourth: "" };
  }

  FirstHandler = (event) => {
    console.log(this.state);
    this.setState({ ...this.state, first: event.target.value });
  };
  SecondHandler = (event) => {
    console.log(this.state);
    this.setState({ ...this.state, second: event.target.value });
  };
  ThirdHandler = (event) => {
    console.log(this.state);
    this.setState({ ...this.state, third: event.target.value });
  };
  FourthHandler = (event) => {
    console.log(this.state);
    this.setState({ ...this.state, fourth: event.target.value });
  };
  formSubmit = (event) => {
    //console.log(event.target.value);
    //alert(`username:${this.state.username} password:${this.state.password}`);
    //alert("login successfully");
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="">
          <div class=" row">
            <div className="col-3"></div>
            <label class="col-3">%Complete</label>
            <div class="col-6">
              <input
                type="text"
                class="form-control w-50"
                id="inputEmail3"
                onChange={this.FirstHandler}
              />
            </div>
          </div>
          <div class=" row">
            <div className="col-3"></div>
            <label class="col-3">IT</label>
            <div class="col-6">
              <input
                type="text"
                class="form-control w-50"
                onChange={this.SecondHandler}
              />
            </div>
          </div>
          <div class=" row">
            <div className="col-3"></div>
            <label class="col-3">OPS</label>
            <div class="col-6">
              <input
                type="text"
                class="form-control w-50"
                onChange={this.ThirdHandler}
              />
            </div>
          </div>
          <div class=" row">
            <div className=""></div>
            <div className="col-3"></div>
            <label class="col-3">IJPs via Upskill</label>
            <div class="col-6">
              <input
                type="text"
                class="form-control w-50"
                onChange={this.FourthHandler}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Upskill;
