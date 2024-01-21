import React from 'react';

import { IUserTransactions } from '@interfaces';
import { getFormatedDateFull, getformatedNumber } from '@utils';
import './styles.scss';

interface IUserTransactionsTableProps {
  data: IUserTransactions[];
}

const UserTransactionsTable: React.FC<IUserTransactionsTableProps> = ({
  data,
}) => {
  return (
    <table className="table table_flex table_three-columns">
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
            <td className="table__cell">
              {transaction.type === 'WRITE_OFF' ? 'Списание' : 'Пополнение'}
            </td>
            <td
              className={`table__cell ${
                transaction.type === 'WRITE_OFF'
                  ? 'table__cell_red-text'
                  : 'table__cell_green-text'
              }`}
            >
              {transaction.type === 'WRITE_OFF' ? '-' : '+'}
              {getformatedNumber(transaction.amount)} BTKN
            </td>
            <td className="table__cell">
              {getFormatedDateFull(transaction.created_at)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTransactionsTable;
