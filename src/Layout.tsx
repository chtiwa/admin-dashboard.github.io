import { Outlet } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"

const Layout = () => {
  return (
    <div className="flex w-full bg-gray-100 text-slate-900 dark:bg-slate-600 dark:text-gray-400">
      <Sidebar />
      <div className="flex flex-col w-full min-h-[100vh]">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
