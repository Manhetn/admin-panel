import React, { PropsWithChildren } from 'react';

import { IconCross } from '@icons';
import './styles.scss';

interface IExpenseChartDrawerProps extends PropsWithChildren {
  isOpen: boolean;
  title?: string;
  handleClose: () => void;
}

const Drawer: React.FC<IExpenseChartDrawerProps> = ({
  isOpen,
  title = '',
  children,
  handleClose,
}) => {
  return (
    <div className={`drawer ${isOpen ? 'drawer_open' : ''}`}>
      <div className="drawer__header">
        <h2 className="drawer__title">{title}</h2>
        <button
          className="button-icon drawer__close-button"
          onClick={handleClose}
        >
          <IconCross />
        </button>
      </div>
      <div className="drawer__content">{children}</div>
    </div>
  );
};

export default Drawer;
