import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api-services';
import { IMAGE } from '../../services/api-services';
import defaultImage from '../../components/default.jpg';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast({ movieId }).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <ul className={s.ActorsGallery}>
      {cast.map(actor => (
        <li key={actor.id} className={s.ActorsGalleryItem}>
          <img
            src={
              actor.profile_path
                ? `${IMAGE}/${actor.profile_path}`
                : defaultImage
            }
            alt={actor.name}
            className={s.ActorsGalleryItem_Image}
          />
          <h3>{actor.name}</h3>
          <h4>Character: {actor.character}</h4>
        </li>
      ))}
    </ul>
  );
}
