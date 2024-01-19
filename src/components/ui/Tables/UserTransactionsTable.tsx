import React from 'react';

import { IUserTransactions } from '@interfaces';
import './styles.scss';

interface IUserTransactionsTableProps {
  data: IUserTransactions[];
}

const UserTransactionsTable: React.FC<IUserTransactionsTableProps> = ({
  data,
}) => {
  return (
    <table className="table table_stabel">
      <thead className="table__thead">
        <tr className="table__tr">
          <th className="table__header-cell">Тип</th>
          <th className="table__header-cell">Сумма</th>
          <th className="table__header-cell">Дата</th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        {data.map((transaction, index) => (
          <tr key={index} className="table__row">
            <td className="table__cell">{transaction.type}</td>
            <td className="table__cell">{transaction.amount}</td>
            <td className="table__cell">{transaction.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTransactionsTable;
