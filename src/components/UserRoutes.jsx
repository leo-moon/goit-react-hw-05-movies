import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from 'Modules/Movies/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const TVPage = lazy(() => import('pages/TV/Tv'));
const SingleMoviePage = lazy(() => import('../pages/SingleMoviePage/SingleMoviePage'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/tv" element={<TVPage />} />
        <Route path="/:media_type/:id" element={<SingleMoviePage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
