import React, { Component } from "react";
import fetchApi from "../../services/fetchApi";

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
  };

  componentDidMount() {
    const movieId = this.props.movieId;
    fetchApi
      .fetchMovieReview(movieId)
      .then((response) => this.setState({ reviews: response.data.results }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;
    return (reviews.length > 0
      ? (<ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{`Author: ${author}`}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>)
      : <p>We don't have any reviews for this movies</p>
    );
  }
}

export default Reviews;
