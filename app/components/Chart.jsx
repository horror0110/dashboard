"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Sun",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mon",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Tue",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Wed",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Thu",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Fri",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Sat",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="h-[450px] bg-bgSoft p-[20px] rounded-[10px]">
      <h2 className="font-extralight text-textSoft mb-[20px]">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
