import React from 'react';

import s from './SearchBar.module.css';

const Searchbar = ({ searchQuery, handleInputChange, handleSubmitForm }) => {
  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmitForm}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          name="searchQuery"
          value={searchQuery}
          onInput={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies and show"
        />
      </form>
    </div>
  );
};

export default Searchbar;