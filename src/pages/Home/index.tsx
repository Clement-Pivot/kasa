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
    if (response.length > 0 && (response[0] as Logement).cover !== undefined) {
      setLogementsList(response as Logement[])
    }
  }, [response])

  return (
    <section className="content">
      <Hero picture={picture} text="Chez vous, partout et ailleurs" />
      <div className="home__content">
        {logementsList.map((logement: Logement) => (
          <HomeCard key={logement.id} logement={logement} />
        ))}
      </div>
    </section>
  )
}

export default Home
