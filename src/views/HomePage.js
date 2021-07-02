import  React, { Component } from "react";

import fetchApi from "../services/fetchApi";
import MoviesCard from "../components/MoviesCard";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchApi
      .fetchTrendingMovie()
      .then((responce) => this.setState({ movies: responce.data.results }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    return (
      <>
        <h1>Trends</h1>
        <MoviesCard movies={this.state.movies}/>
      </>
    );
  }
}

export default HomePage;
