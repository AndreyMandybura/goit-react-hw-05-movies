import { useState, useEffect } from 'react';
import { fetchSearchMovies } from '../services/api-services';
import Loader from '../components/Loader/Loader';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesGallery from '../components/MoviesGallery/MoviesGallery';

export default function MoviesView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;
    setStatus('pending');

    fetchSearchMovies(query)
      .then(data => {
        if (data.length === 0) {
          throw new Error();
        }
        setMovies(data.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [query]);

  const onSubmit = query => {
    setQuery(query);
  };

  if (status === 'idle') {
    return (
      <>
        <SearchForm onSubmit={onSubmit} />
      </>
    );
  }

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'resolved') {
    return (
      <div>
        <SearchForm onSubmit={onSubmit} />
        <MoviesGallery movies={movies} />
      </div>
    );
  }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }
}
