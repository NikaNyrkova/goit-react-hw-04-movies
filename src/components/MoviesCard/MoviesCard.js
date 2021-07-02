import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import routes from "../../routes";

import s from "./MoviesCard.module.css"

const MoviesCard = ({ movies, match, location }) => {
  return (
    <ul className={s.moviesCard_list}>
      {movies.map(({ id, title, original_name, poster_path }) => (
        <li className={s.moviesCard_list__item} key={id}>
          <NavLink
            // to={`${match.url}movies/${id}`}
                  to={{
                      pathname: `${routes.moviesPage}/${id}`,
                      state: {
                          from: location
                      }
            }}
            className={s.nav_link}
            activeClassName="active"
          >
            <img
              alt={`Poster ${title}`}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : "https://img.icons8.com/ios/50/000000/no-image.png"
              }
              width="220"
            ></img>
            <h3 className={s.moviesCard_list__item_title} >{title || original_name}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesCard);
