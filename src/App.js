import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const MoviesView = lazy(() => import('./views/MoviesView/MoviesView'));
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView/MovieDetailsView')
);
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
          <Route path="/*" element={<NotFoundView />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
