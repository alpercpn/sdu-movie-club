// src/components/NavBar.jsx
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/' || location.pathname === ''

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          {!isHome && (
            <button
              className="button ghost"
              onClick={() => navigate(-1)}
              aria-label="Geri Dön"
            >
              ← Geri
            </button>
          )}
          <Link to="/" className="nav-brand">
            🎬 SDU Film Kulübü
          </Link>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Anasayfa
          </Link>
        </nav>
      </div>
    </header>
  )
}
