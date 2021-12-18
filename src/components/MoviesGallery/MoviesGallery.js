import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE } from '../../services/api-services';
import defaultImage from '../../components/default.jpg';
import s from './MoviesGallery.module.css';

export default function MoviesGallery({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.MoviesGallery}>
      {movies.map(movie => (
        <li className={s.MoviesGalleryItem} key={movie.id} id={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              className={s.MoviesGalleryItem_Image}
              src={
                movie.poster_path
                  ? `${IMAGE}${movie.poster_path}`
                  : defaultImage
              }
              alt={movie.title || movie.name}
            ></img>
            <p className={s.GalleryTitle}>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
