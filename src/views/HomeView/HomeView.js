import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from '../../services/api-services';
import PageHeading from '../../components/PageHeading/PageHeadind';

export default function HomeView() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrending().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <PageHeading text="Trending today" />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`movie/${movie.id}`}
                state={{ from: location, label: 'Go to Home' }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}