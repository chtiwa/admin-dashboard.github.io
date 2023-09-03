import {
  Box,
  Laptop2,
  LogIn,
  Menu,
  MoonStar,
  ShoppingBasket,
  Sun,
  Users2
} from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface NavbarProps {
  isSidebarOpen?: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
  theme: string | null
  setTheme: (theme: string) => void
}

const Navbar: React.FC<NavbarProps> = ({
  setIsSidebarOpen,
  theme,
  setTheme
}) => {
  const location = useLocation()
  const navigate = useNavigate()
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

  const handleClickItem = (type: string) => {
    if (type === "dashboard") {
      navigate("/")
    } else if (type === "users") {
      navigate("/users")
    } else if (type === "products") {
      navigate("/products")
    } else if (type === "orders") {
      navigate("/orders")
    } else if (type === "login") {
      navigate("/login")
    } else {
      if (theme === "light") {
        setTheme("dark")
        localStorage.theme = "dark"
      } else {
        setTheme("light")
        localStorage.theme = "light"
      }
    }
    setIsSidebarOpen(false)
  }

  return (
    <div className="w-full flex items-center justify-between p-2 md:p-4 bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-400">
      <div className="flex items-center justify-center gap-4">
        <div
          className="flex p-2 md:hidden hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={30} />
        </div>
        <p className="text-lg sm:text-xl font-bold">{path} </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <ul className="hidden md:flex items-center justify-center gap-8 py-2">
          <li
            className="flex items-end justify-end gap-x-1 hover:cursor-pointer py-2"
            onClick={() => handleClickItem("dashboard")}
          >
            <div>
              <Laptop2 className="hidden lg:flex" />
            </div>
            <span className="text-sm sm:text-base">Dashbaord </span>
          </li>
          <li
            className="flex items-center justify-center gap-x-1 hover:cursor-pointer py-2"
            onClick={() => handleClickItem("users")}
          >
            <div>
              <Users2 className="hidden lg:flex" />
            </div>
            <span className="text-sm sm:text-base">Users</span>
          </li>
          <li
            className="flex items-center justify-center gap-x-1 hover:cursor-pointer py-2"
            onClick={() => handleClickItem("products")}
          >
            <div>
              <ShoppingBasket className="hidden lg:flex" />
            </div>
            <span className="text-sm sm:text-base">Products</span>
          </li>
          <li
            className="flex items-center justify-center gap-x-1 hover:cursor-pointer py-2"
            onClick={() => handleClickItem("orders")}
          >
            <div>
              <Box className="hidden lg:flex" />
            </div>
            <span className="text-sm sm:text-base">Orders</span>
          </li>
          <li
            className="flex items-center justify-center gap-x-1 hover:cursor-pointer py-2"
            onClick={() => handleClickItem("login")}
          >
            <div>
              <LogIn className="hidden lg:flex" />
            </div>
            <span className="text-sm sm:text-base">Login</span>
          </li>
          <li
            className="flex items-center justify-center gap-x-1  hover:cursor-pointer py-2"
            onClick={() => handleClickItem("")}
          >
            <div className="hidden lg:flex">
              {theme === "light" ? <Sun /> : <MoonStar />}
            </div>
            <span className="text-sm sm:text-base">Theme</span>
          </li>
        </ul>
        <img
          src="/person.jpg"
          alt=""
          className="rounded-full object-cover h-10 w-10"
        />
      </div>
    </div>
  )
}

export default Navbar
