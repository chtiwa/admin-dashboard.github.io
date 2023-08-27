import { Menu } from "lucide-react"

const Navbar = () => {
  return (
    <div className="w-full md:w-[calc(100vw-200px)] flex items-center justify-between p-2 md:p-4 bg-blue-600 text-white dark:bg-gray-800 dark:text-gray-400">
      <div className="flex items-center justify-center gap-4">
        <div className="flex md:hidden">
          <Menu size={30} />
        </div>
        <p className="text-lg sm:text-xl font-bold">Dashboard</p>
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
