import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import Reviews from './Review/Review';
// import Cast from './Cast/Cast';
// import MovieDetails from 'pages/MovieDetails';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Review/Review'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

