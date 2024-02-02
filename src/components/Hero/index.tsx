import './index.scss'

interface Props {
  picture: string
  text?: string
}

function Hero({ picture, text = '' }: Props) {
  return (
    <div className="hero">
      <img className="hero__img" src={picture} alt="Hero section background" />
      <h1 className="hero__header">{text}</h1>
    </div>
  )
}

export default Hero
