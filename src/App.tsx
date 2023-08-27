import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Users from "./pages/Users"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Orders from "./pages/Orders"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
