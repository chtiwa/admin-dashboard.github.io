import { Outlet } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import { useState } from "react"

const Layout = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)
  return (
    <div className="flex w-full bg-gray-100 text-slate-900 dark:bg-slate-600 dark:text-gray-400">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setisSidebarOpen}
      />
      <div className="flex flex-col w-full md:w-[calc(100vw-200px)] min-h-[100vh]">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setisSidebarOpen}
        />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
