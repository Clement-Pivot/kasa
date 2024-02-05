import './index.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useApi } from '../../utils/hooks'
import { Logement } from '../../utils/types'
import Carroussel from '../../components/Carroussel'

export default function FicheLogement() {
  const { logementId } = useParams<string>()
  const [logement, setLogement] = useState<Logement>()
  const response = useApi('http://127.0.0.1:3000/data.json')

  useEffect(() => {
    setLogement(response.find((item) => item.id === logementId))
  }, [response, logementId])

  return (
    <section className="content">
      {logement?.pictures && <Carroussel pictures={logement.pictures} />}
    </section>
  )
}
