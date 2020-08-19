import React, { Component } from "react";
//import Caroline from "./components/caroline";
class Production extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card border border-dark">
              <h4 className="card-header bg-dark text-center text-warning">
                CAROLINE
              </h4>
              <div className="card-body">
                <form className="row">
                  <div className="col-4">op loss</div>
                  <div className="col-3">
                    <div class="">
                      <h5 className="">Month</h5>
                      <input
                        type="number"
                        class="form-control w-50 bg-light mr-0"
                      />
                    </div>
                  </div>
                  <div className="col-3">
                    <div class="">
                      <h5>YTD</h5>
                      <input type="number" class="form-control w-50 bg-light" />
                    </div>
                  </div>
                </form>
                <div>
                  <form className="row">
                    <div className="col-4"> loss</div>
                    <div className="col-3">
                      <div class="">
                        <input
                          type="number"
                          class="form-control w-50 bg-light mr-0"
                        />
                      </div>
                    </div>
                    <div className="col-3">
                      <div class="">
                        <input type="number" class="form-control w-50 bg" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card border border-danger">
              <h4 className="card-header bg-dark text-center text-warning">
                NEAR MISS
              </h4>
              <div className="card-body">
                <form className="row">
                  <div className="col-3"></div>
                  <div className="col-8">
                    <div className="d-flex m-5">
                      <div class="form-group">
                        <h5 className="">Month</h5>
                        <input
                          type="number"
                          class="form-control w-50 bg-light"
                        />
                      </div>
                      <div class="form-group">
                        <h5 className="">YTD</h5>
                        <input
                          type="number"
                          class="form-control w-50 bg-light"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Production;
