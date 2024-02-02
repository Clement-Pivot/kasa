import { AccessedLogement } from '../../utils/types'
import './index.scss'

function HomeCard({ logement }: AccessedLogement) {
  return (
    <article className="homeCard">
      <p className="homeCard__title">{logement.title}</p>
      <img src={logement.pictures[0]} className="homeCard__img" alt="" />
    </article>
  )
}

export default HomeCard
