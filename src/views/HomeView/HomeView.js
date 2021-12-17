import { useState, useEffect } from 'react';
import { fetchTrending } from '../../services/api-services';
import PageHeading from '../../components/PageHeading/PageHeadind';
import MoviesGallery from '../../components/MoviesGallery/MoviesGallery';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrending().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <PageHeading text="Trending today" />
      {movies && <MoviesGallery movies={movies} />}
    </div>
  );
}
