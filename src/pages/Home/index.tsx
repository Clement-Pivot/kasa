import './index.scss'
import { useEffect, useState } from 'react'
import Hero from 'components/Hero'
import HomeCard from 'components/HomeCard'
import picture from 'assets/homeHero.png'
import { Logement } from 'utils/types'
import { useApi } from 'utils/hooks'

function Home() {
  const [logementsList, setLogementsList] = useState<Logement[]>([])
  const response = useApi('/data.json')
  useEffect(() => {
    setLogementsList(response)
  }, [response])

  return (
    <section className="content">
      <Hero picture={picture} text="Chez vous, partout et ailleurs" />
      {logementsList.map((logement: Logement) => (
        <HomeCard key={logement.id} logement={logement} />
      ))}
    </section>
  )
}

export default Home
