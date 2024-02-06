import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.scss'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Error404 from './pages/Error404'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import About from './pages/About'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:logementId" element={<FicheLogement />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
