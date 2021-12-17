// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView/HomeView';
import MoviesView from './views/MoviesView/MoviesView';
import MovieDetailsView from './views/MovieDetailsView/MovieDetailsView';
import NotFoundView from './views/NotFoundView/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/*" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Container>
  );
}
