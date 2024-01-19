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
import { ISelectedUser } from 'src/core/interfaces/user';
import { getModifiedDataForChart } from '@utils';
import './styles.scss';

interface IChartProps {}

const data: ISelectedUser = {
  profile: {
    id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
    email: 'Martin84@yahoo.com',
    tg_id: null,
    name: 'Jeanette Mayert',
    password: null,
    avatar: null,
    created_at: '2024-01-16T09:26:22.962Z',
    role: 'USER',
    subscription: {
      id: '59f6b8e3-2b57-4ac3-a35e-56624cf8386e',
      plan_id: '60809cd0-8263-4276-9b18-4f0c51321a25',
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      tokens: 77699,
      additional_tokens: 0,
      created_at: '2024-01-16T09:26:22.962Z',
      plan: {
        id: '60809cd0-8263-4276-9b18-4f0c51321a25',
        type: 'BASIC',
        price: 0,
        currency: 'RUB',
        tokens: 0,
      },
    },
  },
  transactions: [
    {
      id: '519e51fa-488a-41e5-bc5b-f793e2310f68',
      provider: 'SYSTEM',
      amount: 16277,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T14:46:22.874Z',
      external_id: null,
    },
    {
      id: '40cc7ea1-201e-4e21-b2fa-4ede2854dad2',
      provider: 'SYSTEM',
      amount: 3902,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T14:36:22.874Z',
      external_id: null,
    },
    {
      id: 'ecf16800-d5ca-447f-8f55-e433480581cf',
      provider: 'SYSTEM',
      amount: 11111,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T14:26:22.874Z',
      external_id: null,
    },
    {
      id: '62813701-a40b-4ad5-ad51-56a3902b75ab',
      provider: 'SYSTEM',
      amount: 19254,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T14:16:22.874Z',
      external_id: null,
    },
    {
      id: '484a096e-7fb1-4d04-945d-33ea934babf9',
      provider: 'SYSTEM',
      amount: 6491,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T14:06:22.874Z',
      external_id: null,
    },
    {
      id: 'acb8ddbe-5194-4941-8412-2de74669c6a0',
      provider: 'SYSTEM',
      amount: 16467,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T13:56:22.874Z',
      external_id: null,
    },
    {
      id: 'f7dc5a7c-70ce-4ef1-8dbc-062fbae9fc1e',
      provider: 'SYSTEM',
      amount: 15789,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T13:46:22.874Z',
      external_id: null,
    },
    {
      id: '9530dc49-bacb-4861-969c-546d0b405ed2',
      provider: 'SYSTEM',
      amount: 16514,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T13:36:22.874Z',
      external_id: null,
    },
    {
      id: 'd7b7ab76-d196-4762-ba8a-f36b15b88a73',
      provider: 'SYSTEM',
      amount: 6282,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T13:26:22.874Z',
      external_id: null,
    },
    {
      id: 'e47fd71b-d533-439b-bfac-62d3e023b110',
      provider: 'SYSTEM',
      amount: 8836,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T13:16:22.874Z',
      external_id: null,
    },
    {
      id: 'b4357fcd-40de-4c2f-9be1-67e69ed50349',
      provider: 'SYSTEM',
      amount: 14267,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T13:06:22.874Z',
      external_id: null,
    },
    {
      id: 'd0016281-7ce6-482a-9ad4-d6e2e7b5e4d4',
      provider: 'SYSTEM',
      amount: 8735,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T12:56:22.874Z',
      external_id: null,
    },
    {
      id: 'bb2458d4-feda-473e-92d4-21dd531fc1c4',
      provider: 'SYSTEM',
      amount: 9577,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T12:46:22.874Z',
      external_id: null,
    },
    {
      id: 'f424170e-0724-41a2-bf5e-b93df9853529',
      provider: 'SYSTEM',
      amount: 10329,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T12:36:22.874Z',
      external_id: null,
    },
    {
      id: '26ac5fbe-1971-4d1e-af67-fd17cd286ef1',
      provider: 'SYSTEM',
      amount: 18006,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T12:26:22.874Z',
      external_id: null,
    },
    {
      id: 'ebb7d3b9-dd5e-44b8-9b0c-811204c4882c',
      provider: 'SYSTEM',
      amount: 19783,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T12:16:22.874Z',
      external_id: null,
    },
    {
      id: 'a34da27f-3fb5-42ac-bce3-6456077703e7',
      provider: 'SYSTEM',
      amount: 5071,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T12:06:22.874Z',
      external_id: null,
    },
    {
      id: '3ecf96bc-6467-4000-911d-a3dae2c01746',
      provider: 'SYSTEM',
      amount: 17288,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T11:56:22.874Z',
      external_id: null,
    },
    {
      id: '87a8ddd0-34aa-4ab8-9536-54fe4b491a1b',
      provider: 'SYSTEM',
      amount: 136,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T11:46:22.874Z',
      external_id: null,
    },
    {
      id: '545152c6-b4f7-491b-a499-2b462053e999',
      provider: 'SYSTEM',
      amount: 11926,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T11:36:22.874Z',
      external_id: null,
    },
    {
      id: 'cbaa44d7-7c9d-41d7-a216-82ef01373524',
      provider: 'SYSTEM',
      amount: 12422,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T11:26:22.874Z',
      external_id: null,
    },
    {
      id: '68c87fe1-cb04-4551-86d9-054bae0d142d',
      provider: 'SYSTEM',
      amount: 4450,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T11:16:22.874Z',
      external_id: null,
    },
    {
      id: 'd417cca0-9acf-41cc-ba12-da2af586d058',
      provider: 'SYSTEM',
      amount: 8607,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T11:06:22.874Z',
      external_id: null,
    },
    {
      id: '14595755-2733-4cc1-8802-b70da7f67b63',
      provider: 'SYSTEM',
      amount: 4601,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T10:56:22.874Z',
      external_id: null,
    },
    {
      id: '7509259f-23da-47ae-9fcb-3a7f7da05a9f',
      provider: 'SYSTEM',
      amount: 11632,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T10:46:22.874Z',
      external_id: null,
    },
    {
      id: 'd5150604-b60e-4045-8950-61b3c3cc9941',
      provider: 'SYSTEM',
      amount: 6935,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T10:36:22.874Z',
      external_id: null,
    },
    {
      id: '835cf756-fb55-4414-9c32-e3bbb59353f0',
      provider: 'SYSTEM',
      amount: 2131,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T10:26:22.874Z',
      external_id: null,
    },
    {
      id: 'c0be6439-6c8c-47e3-960a-211e940f5142',
      provider: 'SYSTEM',
      amount: 4645,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T10:16:22.874Z',
      external_id: null,
    },
    {
      id: 'd7edde9d-b2a7-403d-bf5e-4bd572b64b1a',
      provider: 'SYSTEM',
      amount: 9303,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T10:06:22.874Z',
      external_id: null,
    },
    {
      id: '5feff6d2-3f6a-4dd4-a3ee-b5a70a6913d3',
      provider: 'SYSTEM',
      amount: 15393,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T09:56:22.874Z',
      external_id: null,
    },
    {
      id: '18dcf74d-9eb4-4bb1-8a07-1f9474c7e050',
      provider: 'SYSTEM',
      amount: 101,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'SUCCEDED',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T09:46:22.874Z',
      external_id: null,
    },
    {
      id: 'bdc64901-9486-493e-b831-ca561b85ee0b',
      provider: 'SYSTEM',
      amount: 18341,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'REPLENISH',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T09:36:22.874Z',
      external_id: null,
    },
    {
      id: '0589d45d-5122-4e10-9d31-089cb0001d4c',
      provider: 'SYSTEM',
      amount: 13695,
      currency: 'SYSTEM_TOKEN',
      meta: null,
      status: 'PENDING',
      type: 'WRITE_OFF',
      plan_id: null,
      user_id: '4da67ef6-bded-4b83-a3c2-777ece7bae3a',
      referral_id: null,
      created_at: '2024-01-16T09:26:22.874Z',
      external_id: null,
    },
  ],
};

const renderTooltipContent = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
): React.ReactNode => {
  const { active, payload, label } = props;

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const Chart: React.FC<IChartProps> = () => {
  const chartData = getModifiedDataForChart(
    data.transactions,
    data.profile.email
  );

  console.log(chartData);

  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <ResponsiveContainer width="100%" height={359}>
          <ComposedChart
            width={430}
            height={351}
            data={chartData}
            margin={{ bottom: 20 }}
          >
            <CartesianGrid stroke="#222b44" strokeWidth={1} vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              height={36}
              tick={{
                fontSize: 12,
                fill: '#616D8D',
              }}
            />
            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: '#616D8D',
              }}
            />
            <Legend
              height={26}
              content={(props) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    paddingTop: 12,
                  }}
                >
                  {props.payload &&
                    props.payload.map((entry) => (
                      <React.Fragment key={`legend-${entry.value}`}>
                        <span
                          style={{
                            display: 'block',
                            width: 12,
                            height: 12,
                            backgroundColor: entry.color,
                            borderRadius: '2px',
                          }}
                        ></span>
                        <span
                          style={{
                            color: '#616D8D',
                            fontSize: '14px',
                            fontWeight: 500,
                          }}
                        >
                          {entry.value}
                        </span>
                      </React.Fragment>
                    ))}
                </div>
              )}
            />
            <Brush
              dataKey="date"
              height={24}
              stroke="#1C64F2"
              fill="#222B44"
              endIndex={Math.min(20, chartData.length - 1)}
            >
              <LineChart
                width={343}
                height={320}
                data={chartData}
                margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
              >
                <CartesianGrid
                  stroke="#222b44"
                  strokeWidth={1}
                  vertical={false}
                />
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
      </div>
    </>
  );
};

export default Chart;
