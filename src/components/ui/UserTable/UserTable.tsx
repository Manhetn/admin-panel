import React, { useState } from 'react';

import { IUserData } from '@interfaces';
import './styles.scss';
import { IconArrowDown, IconArrowUp, IconEdit, IconTrashCan } from '@icons';

interface IUserTableProps {
  data: IUserData[];
  handleClickUser: (id: string) => void;
}

const UserTable: React.FC<IUserTableProps> = ({ data, handleClickUser }) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [isSorted, setIsSorted] = useState(false);

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setIsSorted(true);
  };

  const sortedData = isSorted
    ? [...data].sort((a, b) => {
        const aValue = a.subscription.tokens;
        const bValue = b.subscription.tokens;

        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      })
    : data;

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th className="user-table__header-cell">Email</th>
          <th className="user-table__header-cell">Имя</th>
          <th className="user-table__header-cell">Роль</th>
          <th className="user-table__header-cell">Подписка</th>
          <th className="user-table__header-cell user-table__cell_with-button">
            Токены
            <button className="button-icon" type="button" onClick={handleSort}>
              {sortOrder === 'desc' ? (
                <IconArrowDown stylesClass="user-table__icon-sort" size={18} />
              ) : (
                <IconArrowUp stylesClass="user-table__icon-sort" size={18} />
              )}
            </button>
          </th>
          <th className="user-table__header-cell">Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((user, index) => (
          <tr key={index} className="user-table__row">
            <td className="user-table__cell user-table__cell_email">
              {user.email}
            </td>
            <td className="user-table__cell">
              <button
                className="button-text"
                onClick={() => handleClickUser(user.id)}
              >
                {user.name}
              </button>
            </td>
            <td className="user-table__cell">{user.role}</td>
            <td className="user-table__cell">{user.subscription.plan.type}</td>
            <td className="user-table__cell">{user.subscription.tokens} TKN</td>
            <td className="user-table__cell user-table__cell_with-button">
              <button
                className="button-icon"
                type="button"
                onClick={() => console.log('click edit')}
              >
                <IconEdit stylesClass="user-table__icon-actions" size={18} />
              </button>
              <button
                className="button-icon"
                type="button"
                onClick={() => console.log('click trash')}
              >
                <IconTrashCan
                  stylesClass="user-table__icon-actions"
                  size={18}
                />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
