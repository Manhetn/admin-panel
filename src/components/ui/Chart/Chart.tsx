import React from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Brush,
  Area,
  CartesianGrid,
  Line,
  LineChart,
} from 'recharts';

import { ISelectedUser } from '@interfaces';
import { MONTHS } from '@consts';
import { getModifiedDataForChart } from '@utils';
import './styles.scss';

interface IChartProps {
  data: ISelectedUser;
}

const renderTooltipContent = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
): React.ReactNode => {
  const { active, payload, label } = props;

  if (active && payload && payload.length) {
    return (
      <div className="recharts-customized__tooltip">
        <p className="recharts-customized__tooltip-label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderLegendsContent = (props: any) => {
  return (
    <div className="recharts-customized__legend">
      {props.payload &&
        props.payload.map((entry: { value: string; color: string }) => (
          <React.Fragment key={`legend-${entry.value}`}>
            <span
              className="recharts-customized__legend-marker"
              style={{
                backgroundColor: entry.color,
              }}
            ></span>
            <span className="recharts-customized__legend-text">
              {entry.value}
            </span>
          </React.Fragment>
        ))}
    </div>
  );
};

const Chart: React.FC<IChartProps> = ({ data }) => {
  const chartData = getModifiedDataForChart(
    data.transactions,
    data.profile.email
  );

  return (
    <ResponsiveContainer width="100%" height={359}>
      <ComposedChart width={430} height={351} data={chartData}>
        <CartesianGrid stroke="#222b44" strokeWidth={1} vertical={false} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          height={36}
          className="recharts-customized__xaxis"
          domain={['auto', 'auto']}
          textAnchor="end"
          tickFormatter={(value) => {
            const parts = value.split(' ');
            return `${parts[0]} ${MONTHS[parseInt(parts[1]) - 1]} ${parts[2]}`;
          }}
        />
        <YAxis
          orientation="right"
          axisLine={false}
          tickLine={false}
          className="recharts-customized__yaxis"
        />
        <Legend height={26} content={renderLegendsContent} />
        <Brush
          dataKey="date"
          height={24}
          stroke="#1C64F2"
          fill="#222B44"
          startIndex={0}
          endIndex={Math.min(20, chartData.length - 1)}
          className="recharts-customized__brush"
          tickFormatter={(value) => {
            const parts = value.split(' ');
            return `${parts[2]}-${parts[1]}`;
          }}
        >
          <LineChart
            width={343}
            height={320}
            data={chartData}
            margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
          >
            <CartesianGrid stroke="#222b44" strokeWidth={1} vertical={false} />
            <Line
              dataKey={data.profile.email}
              stroke="#616D8D"
              dot={false}
              fill="rgba(28, 100, 242, 0.2)"
            />
          </LineChart>
        </Brush>
        <Tooltip content={renderTooltipContent} />
        <Area
          dataKey={data.profile.email}
          stroke="#1C64F2"
          fill="rgba(28, 100, 242, 0.2)"
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
