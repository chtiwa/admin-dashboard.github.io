import { BarChart, Percent, PieChart, ShoppingBag } from "lucide-react"
import UsersChart from "../Components/BarChart"

const Home = () => {
  return (
    <div className="flex flex-col justify-center gap-8 py-4 px-2 w-full">
      <ul className="flex flex-wrap justify-center gap-4 w-[80%] lg:w-full mx-auto">
        <li className="relative w-full lg:w-5/12 shadow bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex flex-col">
            <p className="text-slate-500 font-bold tracking-wide">Traffic</p>
            <p className="text-xl font-semibold">20,000</p>
            <div className="flex gap-2 mt-4 text-sm">
              <span className="text-green-500">3.48%</span>
              <span className="text-slate-500">Since last month</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center justify-center p-2 bg-red-500 rounded-full text-white">
            <BarChart />
          </div>
        </li>
        <li className="relative w-full lg:w-5/12 shadow bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex flex-col">
            <p className="text-slate-500 font-bold tracking-wide">New Users </p>
            <p className="text-xl font-semibold">509</p>
            <div className="flex gap-2 mt-4 text-sm">
              <span className="text-green-500">3.48%</span>
              <span className="text-slate-500">Since last month</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center justify-center p-2 bg-red-500 rounded-full text-white">
            <PieChart />
          </div>
        </li>
        <li className="relative w-full lg:w-5/12 shadow bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex flex-col">
            <p className="text-slate-500 font-bold tracking-wide">Sales </p>
            <p className="text-xl font-semibold">124</p>
            <div className="flex gap-2 mt-4 text-sm">
              <span className="text-green-500">3.48%</span>
              <span className="text-slate-500">Since last month</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center justify-center p-2 bg-orange-500 rounded-full text-white">
            <ShoppingBag />
          </div>
        </li>
        <li className="relative w-full lg:w-5/12 shadow bg-white dark:bg-gray-800 rounded-lg p-4">
          <div className="flex flex-col">
            <p className="text-slate-500 font-bold tracking-wide">
              Performance
            </p>
            <p className="text-xl font-semibold">56,79%</p>
            <div className="flex gap-2 mt-4 text-sm">
              <span className="text-red-500">3.48%</span>
              <span className="text-slate-500">Since last month</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 flex items-center justify-center p-2 bg-pink-500 rounded-full text-white">
            <Percent />
          </div>
        </li>
      </ul>
      {/* <div className="flex items-center justify-center w-full">
        <UsersChart />
      </div> */}
    </div>
  )
}

export default Home
