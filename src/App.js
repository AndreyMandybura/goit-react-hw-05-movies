// import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/*" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route> */}
      </Routes>
    </Container>
  );
}
