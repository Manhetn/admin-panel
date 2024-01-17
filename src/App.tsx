import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import { AdminPage, ErrorPage } from './pages';
import { Provider } from 'react-redux';
import store from './core/store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AdminPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
