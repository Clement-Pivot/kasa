import './index.scss'
import Hero from '../../components/Hero'
import HomeCard from '../../components/HomeCard'
import picture from '../../assets/homeHero.png'

function Home() {
  return (
    <section className="content">
      <Hero picture={picture} text="Chez vous, partout et ailleurs" />
    </section>
  )
}

export default Home
