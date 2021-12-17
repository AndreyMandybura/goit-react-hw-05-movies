import { Link, useLocation } from 'react-router-dom';
import { IMAGE } from '../../services/api-services';
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
              src={`${IMAGE}${movie.poster_path}`}
              alt={movie.title || movie.name}
            ></img>
            <p className={s.GalleryTitle}>{movie.title || movie.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
