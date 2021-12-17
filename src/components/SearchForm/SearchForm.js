import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleChange}
        />

        <button type="submit" disabled={!query} className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>
      </form>
    </header>
  );
}

SearchForm.prototype = {
  onSubmit: PropTypes.func,
};
