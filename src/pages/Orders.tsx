import { Edit, Trash2 } from "lucide-react"
import { Order } from "../utils/types/Order"
import Pagination from "../Components/Pagination"
import { useEffect, useState } from "react"
import { createRandomOrders } from "../utils/generateOrders"

const Orders = () => {
  const [Orders, setOrders] = useState([])
  const [page, setPage] = useState(1)
  const pages = 2
  const columns = [
    "full name",
    "title",
    "price",
    "quantity",
    "total",
    "image",
    "ordered at"
  ]

  useEffect(() => {
    setOrders(
      // @ts-ignore
      createRandomOrders()
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
          {Orders.map((order: Order, i: number) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={i}
            >
              <td className="px-2 lg:px-6 py-4">{order.fullName}</td>
              <td className="px-2 lg:px-6 py-4">{order.title}</td>
              <td className="px-2 lg:px-6 py-4">{order.price}</td>
              <td className="px-2 lg:px-6 py-4">{order.quantity}</td>
              <td className="px-2 lg:px-6 py-4">
                {order.quantity * parseInt(order.price)}$
              </td>
              <td className="px-2 lg:px-6 py-4">
                <img
                  src={order.image}
                  alt={order.title}
                  className="object-contain h-10 w-10 "
                />
              </td>
              <td className="px-2 lg:px-6 py-4">
                {order.orderedAt.toDateString()}
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
      <Pagination pages={pages} page={page} setPage={setPage} key={3} />
    </div>
  )
}

export default Orders
