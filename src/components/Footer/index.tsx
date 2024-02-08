import './index.scss'
import Logo from 'assets/LOGO.svg?react'

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Logo className="footer__logo" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
