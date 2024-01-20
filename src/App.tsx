import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/index.scss';
import { store } from '@store';
import { AdminPage, ErrorPage } from '@pages';

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
