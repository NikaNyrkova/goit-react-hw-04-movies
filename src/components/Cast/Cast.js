import React, { Component } from "react";
import fetchApi from "../../services/fetchApi";
import s from './Cast.module.css'

class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidMount() {
    const movieId = this.props.movieId;
    fetchApi
      .fetchMovieCast(movieId)
      .then((response) => this.setState({ cast: response.data.cast }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;
    return (
      <ul className={s.cast_flex}>
        {cast.map(({ original_name, profile_path, character, cast_id }) => (
          <li className={s.cast_item} key={cast_id}>
            <img
              alt={`Poster ${original_name}`}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : "https://www.pngkey.com/png/detail/107-1072091_computer-icons-user-profile-facebook-instagram-instagram-profile.png"
              }
              width="220"
            ></img>
            <h3>{original_name}</h3>
            <h4>{`Character: ${character}`}</h4>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;

