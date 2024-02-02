import './index.scss'

function Hero(target: { picture: any; text: string }) {
  return (
    <div className="hero">
      <img
        className="hero__img"
        src={target.picture}
        alt="Hero section background"
      />
      <h1 className="hero__header">{target.text ? target.text : ''}</h1>
    </div>
  )
}

export default Hero
