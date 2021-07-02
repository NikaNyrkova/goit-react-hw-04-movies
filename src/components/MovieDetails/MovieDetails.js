import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import routes from "../../routes";

import s from "./MovieDetails.module.css";

class MovieDetails extends Component {
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
    this.setState({ ...this.props.state });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ ...this.props.state });
    }
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { title, rating, poster_path, overview, genres, release_date, year } =
      this.state;
    return (
      <>
        <button
          className={s.button_back}
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </button>
        <div className={s.details_flex}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              width="400"
              alt={`Poster ${title}`}
            ></img>
          </div>
          <div className={s.details_info}>
            <h1>{`${title} (${year})`}</h1>
            <p>Release: {release_date}</p>
            <p>Rating: {rating}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            {genres.length > 0 && <h2>Genres</h2>}
            {genres.length > 0 && genres.map(({ name }) => name).join(" ")}
          </div>
        </div>
        <ul className={s.details_nav}>
          <li>
            <NavLink
              exact
              to={{
                pathname: `${this.props.match.url}/cast`,
                state: {
                  from: this.props.location.state.from,
                },
              }}
              className={s.nav_link}
              activeClassName={s.active}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={{
                pathname: `${this.props.match.url}/reviews`,
                state: {
                  from: this.props.location.state.from,
                },
              }}
              className={s.nav_link}
              activeClassName={s.active}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}

export default withRouter(MovieDetails);
