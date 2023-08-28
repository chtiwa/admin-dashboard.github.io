import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Users from "./pages/Users"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Orders from "./pages/Orders"
import Login from "./pages/Login"

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"))

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />}>
          <Route index element={<Home theme={theme} />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
