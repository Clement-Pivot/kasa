import { ReactNode, useState } from 'react'
import Arrow from 'assets/arrow.svg?react'
import './index.scss'

type Props = {
  title: string
  content: ReactNode
}

export default function Collapse({ title, content }: Props): JSX.Element {
  const [toggled, setToggle] = useState<boolean>(false)
  const toggle = () => {
    setToggle((toggle) => !toggle)
  }

  return (
    <div className="colapse">
      <div className="colapse__header" onClick={toggle}>
        {title}
        <Arrow
          className={
            toggled ? 'colapse__header--arrow active' : 'colapse__header--arrow'
          }
        />
      </div>
      <div className="colapse__wrapper">
        <p className={toggled ? 'colapse__content' : 'colapse__content hidden'}>
          {content}
        </p>
      </div>
    </div>
  )
}
