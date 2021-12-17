import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loading() {
  return (
    <div className={s.Loader}>
      <Loader
        type="Rings"
        color="rgba(27, 76, 238, 0.966)"
        height={400}
        width={400}
        timeout={3000}
      />
    </div>
  );
}
