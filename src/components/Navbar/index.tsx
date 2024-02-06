import './index.scss'
import Logo from '/src/assets/LOGO.svg?react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
  const location = useLocation()
  const [pathname, setPathname] = useState('')

  useEffect(() => {
    setPathname(location.pathname)
  }, [location])

  return (
    <nav className="nav">
      <Logo className="nav__logo" />
      <ul className="nav__links">
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className={pathname === '/about' ? 'active' : ''}>
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
