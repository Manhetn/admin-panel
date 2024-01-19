import { IChartItem2, IUserTransactions } from '@interfaces';
// import getTime from './getTime';
import getFormatedDate from './getFormatedDate';
// import getFormatedDate from './getFormatedDate';
// import getTime from './getTime';

// alert(date.toLocaleString('ru', options));

const getModifiedDataForChart = (
  data: IUserTransactions[],
  email: string
): IChartItem2[] => {
  return data.map((item) => ({
    date: getFormatedDate(item.created_at), // getTime(item.created_at)
    [email]: item.amount,
  }));
};

export default getModifiedDataForChart;
// getFormatedDate(item.created_at);
