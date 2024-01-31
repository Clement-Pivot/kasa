import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Test</div>} />
        <Route path="*" element={<div>Erreur 404</div>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
