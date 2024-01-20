import { IChartItem, IUserTransactions } from '@interfaces';
import getFormatedDate from './getFormatedDate';

const getModifiedDataForChart = (
  data: IUserTransactions[],
  email: string
): IChartItem[] => {
  return data.map((item) => ({
    date: getFormatedDate(item.created_at),
    [email]: item.amount,
  }));
};

export default getModifiedDataForChart;
