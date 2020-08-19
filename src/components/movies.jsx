import React from "react";
class Movies extends React.Component {
  state = {
    name: "bhahubali",
    year: "2009",
    collections: "6crs",
  };
  render() {
    return (
      <div>
        {this.state.name}
        {this.state.year}
        {this.state.collections}
      </div>
    );
  }
}

export default Movies;
