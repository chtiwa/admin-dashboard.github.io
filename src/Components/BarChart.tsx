import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

const data = [
  {
    month: "January",
    users: 400
  },
  {
    month: "February",
    users: 500
  },
  {
    month: "March",
    users: 600
  },
  {
    month: "April",
    users: 400
  },
  {
    month: "May",
    users: 200
  },
  {
    month: "June",
    users: 250
  },
  {
    month: "July",
    users: 80
  },
  {
    month: "August",
    users: 400
  },
  {
    month: "September",
    users: 450
  },
  {
    month: "October",
    users: 300
  },
  {
    month: "November",
    users: 250
  },
  {
    month: "December",
    users: 300
  }
]

interface BarChartProps {
  theme: string | null
}

const UsersChart: React.FC<BarChartProps> = ({ theme }) => {
  return (
    <div className="flex items-center justify-center flex-col w-full mr-4 ">
      <h1 className="text-2xl font-semibold dark:text-gray-400">
        Active Users
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            stroke={`${
              theme === "light" ? "rgb(55,65,81)" : "rgb(156,163,175)"
            }`}
          />
          <YAxis
            stroke={`${
              theme === "light" ? "rgb(55,65,81)" : "rgb(156,163,175)"
            }`}
          />
          <Tooltip />
          <Bar dataKey="users" fill="rgb(37,99,235)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UsersChart
