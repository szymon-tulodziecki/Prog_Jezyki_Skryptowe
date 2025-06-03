import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Contact from './pages/contact/Contact.jsx'
import Login from './pages/login/Login.jsx'
import ProductPage from './pages/product_page/ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produkt/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
