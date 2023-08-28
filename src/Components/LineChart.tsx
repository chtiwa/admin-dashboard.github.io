import {
  Line,
  LineChart,
  CartesianGrid,
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

interface OrdersChartProps {
  theme: string | null
}

const OrdersChart: React.FC<OrdersChartProps> = ({ theme }) => {
  return (
    <div className="flex items-center justify-center flex-col w-full mr-4 ">
      <h1 className="text-2xl font-semibold dark:text-gray-400">
        Total Orders
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
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
          <Line
            type="monotone"
            dataKey="orders"
            stroke="rgb(37 ,99 ,235)"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default OrdersChart
