import React, { Component } from "react";
//import React from "react";
import Upskill from "./upskill";
class Input extends Component {
  state = {};
  ButtonSubmit = () => {
    alert("submitted successfully");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            <div class="card bg-light mb-3 border-dark w-50 ">
              <h4 class="card-header bg-dark text-warning text-center">
                UPSKILL
              </h4>
              <div class="card-body">
                <Upskill />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.ButtonSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
