import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div id="error-page">
      <h1>Error 404</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={`/`}>На главную</Link>
    </div>
  );
};

export default ErrorPage;
