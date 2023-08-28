import { Outlet } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import Navbar from "./Components/Navbar"
import { useState } from "react"

interface LayoutProps {
  theme: string | null
  setTheme: (theme: string) => void
}

const Layout: React.FC<LayoutProps> = ({ theme, setTheme }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)

  return (
    <div className="flex w-full bg-gray-100 text-slate-900 dark:bg-slate-600 dark:text-gray-400">
      <Sidebar
        theme={theme}
        setTheme={setTheme}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setisSidebarOpen}
      />
      <div className="flex flex-col w-full min-h-[100vh]">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setisSidebarOpen}
          theme={theme}
          setTheme={setTheme}
        />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
