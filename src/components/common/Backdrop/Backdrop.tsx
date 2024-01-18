import React, { PropsWithChildren } from 'react';
import './styles.scss';

interface IBackdropProps extends PropsWithChildren {
  isShow: boolean;
  onClickHendler: () => void;
  stylesClass?: string | null;
}

const Backdrop: React.FC<IBackdropProps> = ({
  isShow,
  children,
  onClickHendler,
  stylesClass = null,
}) => {
  return (
    <div
      className={`backdrop${stylesClass ? ' ' + stylesClass : ''}${
        isShow ? ' backdrop_show' : ''
      }`}
    >
      <div
        className="backdrop__bg"
        onClick={() => {
          console.log('ckick');
          onClickHendler();
        }}
      ></div>
      {children}
    </div>
  );
};

export default Backdrop;
