import { BrowserRouter } from 'react-router-dom';

import Navbar from '../Modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
}
