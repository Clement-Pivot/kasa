import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main.scss'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div>Test</div>} />
        <Route path="*" element={<div>Erreur 404</div>} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
