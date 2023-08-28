import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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

const UsersChart = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-100 text-slate-900 w-full">
      <h1 className="text-2xl font-semibold ">Active Users</h1>
      <ResponsiveContainer width="80%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default UsersChart
