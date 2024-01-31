import './index.scss'
import { ReactComponent as Logo } from '../../assets/LOGO.svg'

function Navbar() {
  return (
    <nav className="nav">
      <Logo className="nav__logo" />
    </nav>
  )
}

export default Navbar
