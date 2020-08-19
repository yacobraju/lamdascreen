import React from "react";
const Movie1 = (props) => {
  return (
    <div>
      <h3>
        Movie id is:{props.movie._id} with title:{props.movie.title} and genre:
        {props.movie.genre}
        {props.movie.numberInStock}
        {props.movie.dailyRentalRate}
      </h3>
    </div>
  );
};

export default Movie1;
