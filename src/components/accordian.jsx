import React from "react";
import Calculator from "./calculator";
const Accordian = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-11">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button
                      class="btn btn"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      //aria-controls="collapseOne"
                    >
                      PRODUCTION
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  class="collapse show"
                  //aria-labelledby="headingOne"
                  //data-parent="#accordionExample"
                >
                  <div class="card-body">HI</div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      DASHBOARD
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  class="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    <Calculator />
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      FINANCIALS
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">hello</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
