import './index.scss'

interface Props {
  picture: string
  text?: string
}

function Hero({ picture, text = '' }: Props): JSX.Element {
  return (
    <h1 className="hero">
      <img className="hero__img" src={picture} alt="Hero section background" />
      {text.length > 0 ? <p className="hero__header">{text}</p> : ''}
    </h1>
  )
}

export default Hero
