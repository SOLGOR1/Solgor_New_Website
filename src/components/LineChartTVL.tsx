'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: 'Mar 01',
    TVL: 0.100 ,
  },
  {
    name: 'Mar 15',
    TVL: 20.90 ,
  },
  {
    name: 'Apr 01',
    TVL: 11.55 ,
  },
  {
    name: 'Apr 15',
    TVL: 6.18 ,
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer className="flex items-center text-center" width={500} height={300}>
      <LineChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TVL" stroke="#FFA500" />

      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;