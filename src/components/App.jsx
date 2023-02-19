// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       HI
//     </div>
//   );
// };
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from '../Modules/Navbar/Navbar'
import HomePage from '../pages/HomePage/HomePage';
import MoviePage from '../pages/MoviePage/MoviePage';
import SingleMoviePage from '../pages/SingleMoviePage/SingleMoviePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
// import Movies from '../Modules/Movies/Movies';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/:media_type/:id" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
