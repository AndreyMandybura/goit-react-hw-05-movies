import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  useParams,
  useLocation,
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api-services';
import { IMAGE } from '../../services/api-services';
import Loader from '../../components/Loader/Loader';
import defaultImage from '../../components/default.jpg';
import s from './MovieDetailsView.module.css';

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Rewiews/Reviews'));

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');

    fetchMovieDetails(movieId)
      .then(data => {
        setMovie(data);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [movieId]);

  const onGoHome = () => {
    navigate(location?.state?.from ?? '/');
  };

  if (status === 'idle') {
    return <div></div>;
  }

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>;
  }

  if (status === 'resolved') {
    return (
      <>
        {movie && (
          <>
            <button className={s.Button} type="button" onClick={onGoHome}>
              Go Home
            </button>
            <div className={s.MovieCard}>
              <img
                className={s.MovieCardImage}
                src={
                  movie.poster_path
                    ? `${IMAGE}${movie.poster_path}`
                    : defaultImage
                }
                alt={movie.title || movie.name}
              ></img>
              <div className={s.description}>
                <h2 className={s.movieTitle}>{movie.title || movie.name}</h2>
                <h3 className={s.movieSubtitle}>Score </h3>
                <p className={s.movieText}>{movie.vote_average}</p>
                <h3 className={s.movieSubtitle}>Genres</h3>
                <ul className={s.movieList}>
                  {movie.genres.map(({ id, name }) => (
                    <li className={s.movieItem} key={id}>
                      {name}
                    </li>
                  ))}
                </ul>
                <h3 className={s.movieSubtitle}>Overview</h3>
                <p className={s.movieText}>{movie.overview}</p>
              </div>
            </div>
          </>
        )}
        <hr />
        <div className={s.movieInfo}>
          <h3 className={s.movieSubtitle}>Additional information</h3>
          <NavLink
            to={`/movies/${movieId}/cast`}
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Cast
          </NavLink>
          <NavLink
            to={`/movies/${movieId}/reviews`}
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            Reviews
          </NavLink>
        </div>
        <hr />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}
