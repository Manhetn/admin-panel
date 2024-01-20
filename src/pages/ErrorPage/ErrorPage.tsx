import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const ErrorPage: React.FC = () => {
  return (
    <div id="error-page" className="error-page">
      <div className="error-page__contant">
        <h1 className="error-page__title">Оишибка 404!</h1>
        <p className="error-page__text">Извините, страница не найдена.</p>
        <Link to={`/`} className="error-page__link">
          перейти на главную
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
