import './index.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useApi } from 'utils/hooks'
import { Logement } from 'utils/types'
import Carousel from 'components/Carousel'
import Tag from 'components/Tag'
import Rating from 'components/Rating'
import Profile from 'components/Profile'
import Collapse from 'components/Collapse'
import { Navigate } from 'react-router-dom'

export default function FicheLogement(): JSX.Element {
  const { logementId } = useParams<string>()
  const [logement, setLogement] = useState<Logement>()
  const [isValidId, setValidId] = useState<boolean>(true)
  const [equipmentsCollapse, setEquipmentsCollapse] = useState<JSX.Element>()
  const response = useApi('/data/data.json')

  useEffect(() => {
    const responseLogement = (response as Logement[]).find(
      (item: Logement) => item.id === logementId,
    )
    if (responseLogement?.cover === undefined && response.length > 0) {
      setValidId(() => false)
    }
    setLogement(responseLogement)
  }, [response, logementId])

  useEffect(() => {
    setEquipmentsCollapse(
      logement?.equipments.reduce(
        (result, equipment) => (
          <>
            {result} {result.props.children && <br />} {equipment}
          </>
        ),
        <></>,
      ),
    )
  }, [logement])

  return isValidId ? (
    <main className="content logement">
      {logement ? (
        <>
          <Carousel pictures={logement.pictures} />
          <h1 className="logement__header">{logement.title}</h1>
          <h2 className="logement__location">{logement.location} </h2>
          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <Tag text={tag} key={'Tag-' + tag} />
            ))}
          </div>
          <div className="logement__infos">
            <Rating stars={logement.rating} />
            <Profile user={logement.host} />
          </div>
          <div className="logement__colapses">
            <Collapse title="Description" content={logement.description} />
            <Collapse title="Équipements" content={equipmentsCollapse} />
          </div>
        </>
      ) : (
        ''
      )}
    </main>
  ) : (
    <Navigate to="/error" />
  )
}
