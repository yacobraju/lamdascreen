import React, { Component } from "react";
class Home extends Component {
  state = {};
  //imgurl = "https://picsum.photos/400";
  render() {
    return (
      <div>
        <div className="bg-info">
          <h1 className="text-center text-warning">Home</h1>
        </div>
        <div>
          <img
            src="https://picsum.photos/1400/500"
            alt="loding"
            className="m-0"
          ></img>
        </div>
      </div>
    );
  }
}

export default Home;
