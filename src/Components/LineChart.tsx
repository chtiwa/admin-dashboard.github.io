import {
  Line,
  LineChart,
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
    orders: 100
  },
  {
    month: "February",
    orders: 150
  },
  {
    month: "March",
    orders: 80
  },
  {
    month: "April",
    orders: 120
  },
  {
    month: "May",
    orders: 110
  },
  {
    month: "June",
    orders: 190
  },
  {
    month: "July",
    orders: 220
  },
  {
    month: "August",
    orders: 250
  },
  {
    month: "September",
    orders: 220
  },
  {
    month: "October",
    orders: 195
  },
  {
    month: "November",
    orders: 165
  },
  {
    month: "December",
    orders: 185
  }
]

const OrdersChart = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-100 text-slate-900 w-full md:w-[400px] lg:w-[600px]">
      <h1 className="text-2xl font-semibold ">Total Orders</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="orders" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OrdersChart
