import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Features from "./pages/Features"
import Contact from "./pages/Contact"
import ProductCatalog from "./pages/ProductCatalog"
import ProductDetail from "./pages/ProductDetail"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="catalog" element={<ProductCatalog />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="features" element={<Features />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
