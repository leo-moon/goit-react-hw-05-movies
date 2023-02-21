import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from '../Modules/Navbar/Navbar';
import HomePage from '../pages/HomePage/HomePage';
import MoviePage from '../pages/MoviePage/MoviePage';
import TVPage from 'pages/TV/Tv';
import SingleMoviePage from '../pages/SingleMoviePage/SingleMoviePage';
import CastPage from 'pages/CastPage/CastPage';
import ReviewPage from 'pages/ReviewsPage/ReviewsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import Movies from '../Modules/Movies/Movies';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
}
