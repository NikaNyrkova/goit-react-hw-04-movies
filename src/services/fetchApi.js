// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

import axios from "axios";

// const API_KEY = "9bd6513d6cf9a9f2e5abf7e1b22d6109";
// const BASE_URL = "https://developers.themoviedb.org/3";


function fetchTrendingMovie() {
    // const searchParams = new URLSearchParams({
    //   api_key: API_KEY,
    // });
    // console.log(`${BASE_URL}/trending/all/week?${searchParams}`);
    // return axios.get(`${BASE_URL}/trending/all/week?${searchParams}`);
  return axios({
    method: "GET",
    url: 'https://api.themoviedb.org/3/trending/all/week?api_key=9bd6513d6cf9a9f2e5abf7e1b22d6109',
  });
};

function fetchMovieById (id) {
    return axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=9bd6513d6cf9a9f2e5abf7e1b22d6109`,
  });
};

function fetchMovieCast (id) {
    return axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9bd6513d6cf9a9f2e5abf7e1b22d6109`,
  });
};

function fetchMovieReview (id) {
    return axios({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=9bd6513d6cf9a9f2e5abf7e1b22d6109`,
  });
};

function fetchMovieOnQuery(query) {
  const API_KEY = "9bd6513d6cf9a9f2e5abf7e1b22d6109";
    return axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    // url: `https://api.themoviedb.org/3/movie?api_key=9bd6513d6cf9a9f2e5abf7e1b22d6109&query=${query}`,
  });
};



export default {
  fetchTrendingMovie,
  fetchMovieById,
  fetchMovieCast,
  fetchMovieReview,
  fetchMovieOnQuery
};

