import React, { Component } from "react";
import Login from "./login";
import Home from "./home";
class Calculator extends Component {
  state = {};
  formSubmit = () => {
    alert("submitted successfully");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-0"></div>
          <div className="col-10 mt-5">
            <p>
              <button
                class="btn btn-dark"
                type="button"
                data-toggle="collapse"
                data-target=".multi-collapse"
                //aria-expanded="false"
                //aria-controls="multiCollapseExample1 multiCollapseExample2"
                //onSubmit={this.formSubmit}
              >
                PRODUCTION
              </button>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                  <div class="card">
                    <div className="bg-dark">
                      <h3 className="text-center text-warning">CAROLINE</h3>
                    </div>
                    <center>
                      <table
                        className="border border-dark m-4 "
                        align="center"
                        width="10%"
                        height="200%"
                        border="5"
                      >
                        <tr id="first">
                          <th>Month</th>
                          <th>YTD</th>
                        </tr>
                        <tr>
                          <td>1001</td>
                          <td>Ram</td>
                        </tr>
                        <tr>
                          <td>1002</td>
                          <td>aam</td>
                        </tr>
                      </table>
                    </center>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                  <div class="card card">
                    <div className="bg-dark">
                      <h3 className="text-center text-warning">NEAR MISS</h3>
                    </div>
                    <div className="">
                      <Login />
                    </div>
                  </div>
                  <button type="submit" onClick={this.formSubmit}>
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}
export default Calculator;
