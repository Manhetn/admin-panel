import React from 'react';
import './styles.scss';

interface IBackdropProps {
  onClickHendler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<IBackdropProps> = ({ onClickHendler }) => {
  return <div className="backdrop" onClick={(e) => onClickHendler(e)}></div>;
};

export default Backdrop;
