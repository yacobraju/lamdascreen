import React, { Component } from "react";
class Sample extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="d-flex m-5">
            <div class="form-group">
              <h5 className="">Month</h5>
              <input
                type="number"
                class="form-control w-50 bg-light"
                //id="exampleInputEmail1"
                //aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <h5 className="">Month</h5>
              <input
                type="number"
                class="form-control w-50 bg-light"
                //id="exampleInputEmail1"
                //aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sample;
