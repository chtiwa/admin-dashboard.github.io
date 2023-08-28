import { Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

interface NavbarProps {
  isSidebarOpen?: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
}

const Navbar: React.FC<NavbarProps> = ({ setIsSidebarOpen }) => {
  const location = useLocation()
  const [path, setPath] = useState("")

  useEffect(() => {
    if (location.pathname.slice(1) === "") {
      setPath("Dashboard")
    } else {
      setPath(
        `${location.pathname
          .split("/")[1]
          .slice(0, 1)
          .toUpperCase()}${location.pathname.slice(2)}`
      )
    }
  }, [location])

  return (
    <div className="w-full md:w-[calc(100vw-200px)] flex items-center justify-between p-2 md:p-4 bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-400">
      <div className="flex items-center justify-center gap-4">
        <div
          className="flex p-2 md:hidden hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={30} />
        </div>
        <p className="text-lg sm:text-xl font-bold">{path} </p>
      </div>
      <img
        src="/person.jpg"
        alt=""
        className="rounded-full object-cover h-10 w-10"
      />
    </div>
  )
}

export default Navbar
