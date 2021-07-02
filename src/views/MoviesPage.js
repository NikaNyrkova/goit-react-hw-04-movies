import React, { Component } from "react";

import fetchApi from "../services/fetchApi";
import SearchBar from "../components/SearchBar";
import MoviesCard from "../components/MoviesCard";

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: "",
    error: null,
  };

  componentDidMount() {
    if (this.props.location?.search) {
      const query = this.props.location.search.slice(7);

      fetchApi
      .fetchMovieOnQuery(query.trim())
      .then((response) => {
        this.setState({ movies: response.data.results, searchQuery: query })
      })
      .catch((error) => this.setState({ error }));
    } 
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;

    fetchApi
      .fetchMovieOnQuery(searchQuery.trim())
      .then((response) => {
        this.setState({ movies: response.data.results })
        this.onQueryChange()
      })
      .catch((error) => this.setState({ error }));
  };

  onQueryChange = () => {
    const { history, location } = this.props;

    history.push({
      pathname: location.pathname,
      search: `query=${this.state.searchQuery.trim()}`,
    });
  };

    render() {
        const { searchQuery, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchQuery={searchQuery}
          handleInputChange={this.handleInputChange}
          handleSubmitForm={this.handleSubmitForm}
            />
        <MoviesCard movies={movies} searchQuery={searchQuery} />
      </div>
    );
  }
}

export default MoviesPage;
