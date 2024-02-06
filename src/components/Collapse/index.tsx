import { ReactNode, useState } from 'react'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import './index.scss'

export default function Collapse({
  title,
  content,
}: {
  title: string
  content: ReactNode
}) {
  const [toggled, setToggle] = useState<boolean>(false)
  const toggle = () => {
    setToggle((toggle) => !toggle)
  }

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggle}>
        {title}
        <Arrow
          className={
            toggled
              ? 'collapse__header--arrow active'
              : 'collapse__header--arrow'
          }
        />
      </div>
      <div className="collapse__wrapper">
        <p
          className={toggled ? 'collapse__content' : 'collapse__content hidden'}
        >
          {content}
        </p>
      </div>
    </div>
  )
}
