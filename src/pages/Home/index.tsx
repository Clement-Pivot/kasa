import './index.scss'
import { useEffect, useState } from 'react'
import Hero from '/src/components/Hero'
import HomeCard from '/src/components/HomeCard'
import picture from '/src/assets/homeHero.png'
import { Logement } from '/src/utils/types'
import { useApi } from '/src/utils/hooks'

function Home() {
  const [logementsList, setLogementsList] = useState<Logement[]>([])
  const response = useApi('http://localhost:3000/data.json')
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
