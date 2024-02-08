import './index.scss'
import { SyntheticEvent, useEffect, useState } from 'react'
import Arrow from 'assets/arrow.svg?react'

export default function Carousel({
  pictures,
}: {
  pictures: string[]
}): JSX.Element {
  const [activePicture, setActivePicture] = useState<string>('')
  const [activePictureIndex, setActivePictureIndex] = useState<number>(0)

  useEffect(() => {
    setActivePicture(pictures[activePictureIndex])
  }, [pictures, activePictureIndex])

  function prevPicture(e: SyntheticEvent): void {
    setActivePictureIndex(
      activePictureIndex === 0 ? pictures.length - 1 : activePictureIndex - 1,
    )
  }
  function nextPicture(e: SyntheticEvent): void {
    setActivePictureIndex(
      activePictureIndex === pictures.length - 1 ? 0 : activePictureIndex + 1,
    )
  }
  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <Arrow
          onClick={prevPicture}
          className="carousel__arrow carousel__arrow--prev"
        />
      )}
      <img src={activePicture} alt="Carrousel" className="carousel__img" />
      {pictures.length > 1 && (
        <Arrow onClick={nextPicture} className="carousel__arrow" />
      )}
    </div>
  )
}
