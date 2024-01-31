import './index.scss'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <section className="error404">
      <h1 className="error404__header">404</h1>
      <h2 className="error404__text">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error404__link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default Error404
