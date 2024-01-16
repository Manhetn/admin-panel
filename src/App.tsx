import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import { AdminPage, ErrorPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
