import './index.scss'
import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import HomeCard from '../../components/HomeCard'
import picture from '../../assets/homeHero.png'
import { Logement } from '../../utils/types'

function Home() {
  const [logementsList, setLogementsList] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:3000/data.json')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Probleme acces API')
        }
      })
      .then((data) => {
        setLogementsList(data)
        data.map((d: any) => console.log(d))
      })
  }, [])
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
