import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import fetchApi from "../services/fetchApi";
import MovieDetails from "../components/MovieDetails";
import Cast from "../components/Cast";
import Reviews from "../components/Reviwes";

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    rating: null,
    title: null,
    genres: [],
    overview: null,
    release_date: null,
    year: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchApi
      .fetchMovieById(movieId)
      .then((responce) =>
        this.setState({
          poster_path: responce.data.poster_path,
          rating: responce.data.vote_average,
          title: responce.data.title,
          genres: responce.data.genres,
          overview: responce.data.overview,
          release_date: responce.data.release_date,
          year: responce.data.release_date.slice(0, 4),
        })
      )
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { movieId } = this.props.match.params
    const { match } = this.props;
    return (
      <>
        <MovieDetails state={this.state} />

        <Switch>
          <Route exact path={`${match.url}/cast`} render={props => <Cast {...props} movieId={movieId} />} />
          <Route exact path={`${match.url}/reviews`} render={props => <Reviews {...props} movieId={movieId} />} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;

// render={props => <Cast {...props} />}
// render = { props => < Reviews {...props }} />
