import React from 'react';

import { IconAvatar, IconEnvelope } from '@icons';
import './styles.scss';

const AdminHeader: React.FC = () => {
  return (
    <header className="admin-header">
      <div className="admin-header__content">
        <div className="admin-header__wrapper">
          <h2 className="admin-header__logo">BitTest</h2>
          <button
            className="button-icon-with-text"
            onClick={() => alert('on click "Моя организация"')}
          >
            <IconEnvelope stylesClass="button-icon-with-text__icon" />
            Моя организация
          </button>
        </div>
        <button className="button-user-menu admin-header__button-user-menu">
          <IconAvatar stylesClass="button-user-menu__icon" />
          <span className="button-user-menu__text-wrapper">
            <span className="button-user-menu__info-text">Вы авторизованы</span>
            <span className="button-user-menu__status-text">Администратор</span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
