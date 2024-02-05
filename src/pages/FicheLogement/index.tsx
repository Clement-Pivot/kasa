import './index.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useApi } from '../../utils/hooks'
import { Logement } from '../../utils/types'
import Carousel from '../../components/Carousel'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'

export default function FicheLogement() {
  const { logementId } = useParams<string>()
  const [logement, setLogement] = useState<Logement>()
  const response = useApi('http://127.0.0.1:3000/data.json')

  useEffect(() => {
    setLogement(response.find((item) => item.id === logementId))
  }, [response, logementId])

  return (
    <section className="content logement">
      {logement ? (
        <>
          <Carousel pictures={logement.pictures} />
          <h1 className="logement__header">{logement.title}</h1>
          <h2 className="logement__location">{logement.location} </h2>
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <Tag text={tag} />
            ))}
          </div>
          <div className="logement__infos">
            <Rating stars={logement.rating} />
          </div>
        </>
      ) : (
        ''
      )}
    </section>
  )
}
