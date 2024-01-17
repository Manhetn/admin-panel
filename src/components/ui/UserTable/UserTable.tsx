import React from 'react';

import { IUserData } from '@interfaces';
import './styles.scss';
import { IconEdit, IconTrashCan } from '@icons';

interface IUserTableProps {
  data: IUserData[];
}

const UserTable: React.FC<IUserTableProps> = ({ data }) => {
  
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th className="user-table__header-cell">Email</th>
          <th className="user-table__header-cell">Имя</th>
          <th className="user-table__header-cell">Роль</th>
          <th className="user-table__header-cell">Подписка</th>
          <th className="user-table__header-cell">Токены</th>
          <th className="user-table__header-cell">Действия</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index} className="user-table__row">
            <td className="user-table__cell user-table__cell_email">
              {user.email}
            </td>
            <td className="user-table__cell">{user.email}</td>
            <td className="user-table__cell">{user.role}</td>
            <td className="user-table__cell">{user.subscription.plan.type}</td>
            <td className="user-table__cell">{user.subscription.tokens} TKN</td>
            <td className="user-table__cell">
              <div className="user-table__actions-wrapper">
                <button
                  className="bitton-icon"
                  type="button"
                  onClick={() => console.log('click edit')}
                >
                  <IconEdit stylesClass="bitton-icon__icon" size={18} />
                </button>
                <button
                  className="bitton-icon"
                  type="button"
                  onClick={() => console.log('click trash')}
                >
                  <IconTrashCan stylesClass="bitton-icon__icon" size={18} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
