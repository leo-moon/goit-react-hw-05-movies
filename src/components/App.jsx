import { BrowserRouter } from 'react-router-dom';

import Navbar from '../Modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

export function App() {
  return (
    <BrowserRouter basename="/github.com/leo-moon/goit-react-hw-05-movies">
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
}
