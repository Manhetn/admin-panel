import React, { useState } from 'react';

import { IUserData } from '@interfaces';
import { IconArrowDown, IconArrowUp, IconEdit, IconTrashCan } from '@icons';
import './styles.scss';
import { TSortOrder } from '@types';

interface IUserTableProps {
  data: IUserData[];
  handleClickUser: (userData: IUserData) => void;
  handleSortUser: (sortOrder: TSortOrder) => void;
}

const UserTable: React.FC<IUserTableProps> = ({
  data,
  handleClickUser,
  handleSortUser,
}) => {
  const [sortOrder, setSortOrder] = useState<TSortOrder>('desc');

  const handleClickSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

    setSortOrder(newSortOrder);
    handleSortUser(newSortOrder);
  };

  return (
    <>
      <table className="table">
        <thead className="table__thead">
          <tr className="table__tr">
            <th className="table__header-cell">Email</th>
            <th className="table__header-cell">Имя</th>
            <th className="table__header-cell">Роль</th>
            <th className="table__header-cell">Подписка</th>
            <th className="table__header-cell table__cell_with-button">
              Токены
              <button
                className="button-icon"
                type="button"
                onClick={handleClickSort}
              >
                {sortOrder === 'desc' ? (
                  <IconArrowDown stylesClass="table__icon-sort" size={18} />
                ) : (
                  <IconArrowUp stylesClass="table__icon-sort" size={18} />
                )}
              </button>
            </th>
            <th className="table__header-cell">Действия</th>
          </tr>
        </thead>
        {data.length > 0 && (
          <tbody className="table__tbody">
            {data.map((user, index) => (
              <tr key={index} className="table__row">
                <td className="table__cell table__cell_email">
                  <button
                    className="button-text"
                    onClick={() => handleClickUser(user)}
                  >
                    {user.email}
                  </button>
                </td>
                <td className="table__cell">
                  <button
                    className="button-text"
                    onClick={() => handleClickUser(user)}
                  >
                    {user.name}
                  </button>
                </td>
                <td className="table__cell">{user.role}</td>
                <td className="table__cell">{user.subscription.plan.type}</td>
                <td className="table__cell">{user.subscription.tokens} TKN</td>
                <td className="table__cell">
                  <span className="table__cell-buttons">
                    <button
                      className="button-icon"
                      type="button"
                      onClick={() => console.log('click edit')}
                    >
                      <IconEdit stylesClass="table__icon-actions" size={18} />
                    </button>
                    <button
                      className="button-icon"
                      type="button"
                      onClick={() => console.log('click trash')}
                    >
                      <IconTrashCan
                        stylesClass="table__icon-actions"
                        size={18}
                      />
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {!data.length && (
        <div className="table__empty-block">
          <h5 className="table__empty-text">Пользователи не найдены</h5>
        </div>
      )}
    </>
  );
};

export default UserTable;
