import { useState, useEffect } from "react"
import {
  Laptop2,
  Users2,
  Sun,
  MoonStar,
  Box,
  ShoppingBasket,
  LogIn
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState(localStorage.getItem("theme"))

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleClickTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      localStorage.theme = "dark"
    } else {
      setTheme("light")
      localStorage.theme = "light"
    }
  }

  return (
    <div className="hidden md:flex min-w-[200px] min-h-[100vh] flex-col gap-y-2 p-4 bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-400">
      <h1 className="flex items-center justify-center py-2 text-lg sm:text-2xl font-bold">
        Admin Panel
      </h1>
      <ul className="flex flex-col gap-y-2 p-4">
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => navigate("/")}
        >
          <div>
            <Laptop2 />
          </div>
          <span className="text-sm sm:text-base">Dashbaord </span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => navigate("/users")}
        >
          <div>
            <Users2 />
          </div>
          <span className="text-sm sm:text-base">Users</span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => navigate("/products")}
        >
          <div>
            <ShoppingBasket />
          </div>
          <span className="text-sm sm:text-base">Products</span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => navigate("/orders")}
        >
          <div>
            <Box />
          </div>
          <span className="text-sm sm:text-base">Orders</span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => navigate("/login")}
        >
          <div>
            <LogIn />
          </div>
          <span className="text-sm sm:text-base">Login</span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4  hover:cursor-pointer py-2"
          onClick={handleClickTheme}
        >
          <div>{theme === "light" ? <Sun /> : <MoonStar />}</div>
          <span className="text-sm sm:text-base">Theme</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
