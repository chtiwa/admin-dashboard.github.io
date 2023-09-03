interface PaginationProps {
  pages: number
  page: number
  setPage: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage, pages }) => {
  const handleChangePage = (page: number) => {
    setPage(page)
  }

  const handleClickPrevNext = (type: string) => {
    if (type === "prev" && page > 1) {
      // @ts-ignore
      setPage((page) => page - 1)
    } else if (type === "next" && page < pages) {
      // @ts-ignore
      setPage((page) => page + 1)
    }
  }

  return (
    <nav className="w-full flex items-center justify-center">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li onClick={() => handleClickPrevNext("prev")}>
          <a
            href="#"
            className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              page === 1 ? "hover:cursor-not-allowed" : ""
            }`}
          >
            Previous
          </a>
        </li>
        {Array.from({ length: pages }, (_, i) => i + 1).map((p, i) => (
          <li onClick={() => handleChangePage(p)} key={i}>
            <a
              href="#"
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                p === page ? "bg-zinc-300  dark:bg-slate-600" : ""
              }`}
            >
              {p}
            </a>
          </li>
        ))}

        <li onClick={() => handleClickPrevNext("next")}>
          <a
            href="#"
            className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              page === pages ? "hover:cursor-not-allowed" : ""
            }`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
