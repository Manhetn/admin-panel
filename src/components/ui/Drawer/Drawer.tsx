import React, { PropsWithChildren } from 'react';
import './styles.scss';

interface IExpenseChartDrawerProps extends PropsWithChildren {
  isOpen: boolean;
  handleClose: () => void;
}

const Drawer: React.FC<IExpenseChartDrawerProps> = ({
  isOpen,
  children,
  handleClose,
}) => {
  return (
    <div className={`expense-chart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-content">
        <button className="close-button" onClick={handleClose}>
          Закрыть
        </button>
        {/* <ExpenseChart /> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
