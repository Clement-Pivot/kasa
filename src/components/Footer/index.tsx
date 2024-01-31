import './index.scss'
import { ReactComponent as Logo } from '../../assets/LOGO.svg'

function Footer() {
  return (
    <footer className="footer">
      <Logo className="footer__logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
