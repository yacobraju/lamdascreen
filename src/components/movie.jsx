import React, { Component } from "react";
import Movie1 from "./movie1.jsx";
class Movie extends Component {
  state = {
    message: "hi",
    movies: [
      {
        _id: "5c15",
        title: "Terminator",
        genre: "Action",
        numberInStock: 6,
        dailyRentalRate: 2.5,
      },
      {
        _id: "5a16",
        title: "Die Hard",
        genre: "Action",
        numberInStock: 5,
        dailyRentalRate: 4,
      },
      {
        _id: "5t17",
        title: "Get Out",
        genre: "Thriller",
        numberInStock: 8,
        dailyRentalRate: 3,
      },
      {
        _id: "6c18",
        title: "Trip to Italy",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5d19",
        title: "Airplane",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5a20",
        title: "Jumanji",
        genre: "Animation",
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
      {
        _id: "6b23",
        title: "Toy Story",
        genre: "Thriller",
        numberInStock: 7,
        dailyRentalRate: 4.5,
      },
      {
        _id: "6b22",
        title: "The Sixth Sense",
        genre: "Thriller",
        numberInStock: 4,
        dailyRentalRate: 3.5,
      },
      {
        _id: "5b21",
        title: "The Avengers",
        genre: "Action",
        numberInStock: 7,
        dailyRentalRate: 3.5,
      },
    ],
    //movies: ["raju", "king", "yacob"],
  };

  changeHandler = () => {
    console.log(this.state.message);
    this.setState({ message: "welcome yacob" });
    //this.setState({ message: event.target.value });
  };
  render() {
    const movies = this.state.movies;
    const list = movies.map((movie) => (
      <Movie1 key={movie._id} movie={movie} />
    )); //MAP function, getting uinfo from Movie1 here movie is used as props
    //return this.state.message ? <div>welcome</div> : <div> getout</div>; // Terinary condition
    return (
      <div>
        MoviesList:{list}
        {this.state.message}
        <button onClick={this.changeHandler}>click me</button>
      </div>
    );
  }
}

export default Movie;
