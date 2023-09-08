import { useEffect } from "react"
import {
  Laptop2,
  Users2,
  Sun,
  MoonStar,
  Box,
  ShoppingBasket,
  LogIn,
  X
} from "lucide-react"
import { useNavigate } from "react-router-dom"

interface SidebarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (isSidebarOpen: boolean) => void
  theme: string | null
  setTheme: (theme: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  theme,
  setTheme
}) => {
  const navigate = useNavigate()

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

  const checkSidebar = () => {
    if (window.innerWidth > 768 && isSidebarOpen) {
      setIsSidebarOpen(false)
      return
    } else {
      return
    }
  }

  useEffect(() => {
    window.addEventListener("resize", checkSidebar)
    return () => window.removeEventListener("resize", checkSidebar)
  }, [])

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
    <div
      className={`${
        isSidebarOpen
          ? "fixed top-0 right-0 w-full z-50 h-[100vh] flex-col gap-y-2 p-4 bg-blue-700 text-white dark:bg-gray-800 dark:text-gray-400"
          : "hidden"
      }`}
    >
      <h1 className="flex items-center justify-between py-2 text-lg sm:text-2xl font-bold">
        Admin Panel
        <X
          onClick={() => setIsSidebarOpen(false)}
          size={30}
          className="md:hidden hover:cursor-pointer"
        />
      </h1>
      <ul className="flex flex-col gap-y-2 p-4 ">
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => handleClickItem("dashboard")}
        >
          <div>
            <Laptop2 />
          </div>
          <span className="text-sm sm:text-base">Dashbaord </span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => handleClickItem("users")}
        >
          <div>
            <Users2 />
          </div>
          <span className="text-sm sm:text-base">Users</span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => handleClickItem("products")}
        >
          <div>
            <ShoppingBasket />
          </div>
          <span className="text-sm sm:text-base">Products</span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => handleClickItem("orders")}
        >
          <div>
            <Box />
          </div>
          <span className="text-sm sm:text-base">Orders</span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4 hover:cursor-pointer py-2"
          onClick={() => handleClickItem("login")}
        >
          <div>
            <LogIn />
          </div>
          <span className="text-sm sm:text-base">Login</span>
        </li>
        <li
          className="flex items-center justify-start gap-x-4  hover:cursor-pointer py-2"
          onClick={() => handleClickItem("")}
        >
          <div>{theme === "light" ? <Sun /> : <MoonStar />}</div>
          <span className="text-sm sm:text-base">Theme</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
