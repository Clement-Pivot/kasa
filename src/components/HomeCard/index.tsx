import { Logement } from 'utils/types'
import './index.scss'

function HomeCard({ logement }: { logement: Logement }) {
  return (
    <article className="homeCard">
      <a
        className="homeCard__gradient"
        href={'/logement/' + logement.id}
        title={'Lien vers un ' + logement.title}
      />
      <p className="homeCard__title">{logement.title}</p>
      <img
        src={logement.pictures[0]}
        className="homeCard__img"
        alt={"Photo d'un " + logement.title}
      />
    </article>
  )
}

export default HomeCard
