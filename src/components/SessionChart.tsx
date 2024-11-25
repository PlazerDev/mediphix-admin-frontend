import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Monday", sessions: 120 },
  { name: "Tuesday", sessions: 98 },
  { name: "Wednesday", sessions: 150 },
  { name: "Thursday", sessions: 130 },
  { name: "Friday", sessions: 200 },
  { name: "Saturday", sessions: 180 },
  { name: "Sunday", sessions: 170 },
];

function SessionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          label={{ value: "Weekdays", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{ value: "Sessions", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessions"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SessionChart;
