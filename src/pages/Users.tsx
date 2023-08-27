import { Edit, Trash2 } from "lucide-react"
import { User } from "../utils/types/User"
import Pagination from "../Components/Pagination"
import { useEffect, useState } from "react"
import { createRandomUsers } from "../utils/generateUsers"

const Users = () => {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const pages = 3
  const columns = ["first name", "last name", "birth date", "avatar"]

  useEffect(() => {
    setUsers(
      // @ts-ignore
      createRandomUsers()
    )
  }, [page])

  return (
    <div className="relative overflow-x-auto p-4 w-full flex flex-col gap-2">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 px-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns?.map((col, i) => (
              <th scope="col" className="px-2 lg:px-6 py-3" key={i}>
                {col}
              </th>
            ))}
            <th scope="col" className="px-2 lg:px-6 py-3">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User, i: number) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={i}
            >
              <td className="px-2 lg:px-6 py-4">{user.firstName}</td>
              <td className="px-2 lg:px-6 py-4">{user.lastName}</td>
              <td className="px-2 lg:px-6 py-4">
                {user.birthDate.toDateString()}
              </td>
              <td className="px-2 lg:px-6 py-4">
                <img
                  src={user.avatar}
                  alt={user.firstName}
                  className="object-contain h-10 w-10 rounded-full"
                />
              </td>
              <td className="flex gap-2 px-2 lg:px-6 py-4">
                <span className="text-green-500 hover:cursor-pointer">
                  <Edit />
                </span>
                <span className="text-red-500 hover:cursor-pointer">
                  <Trash2 />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pages={pages} page={page} setPage={setPage} key={1} />
    </div>
  )
}

export default Users
