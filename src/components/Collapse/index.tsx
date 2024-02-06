import { ReactNode } from 'react'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import './index.scss'

export default function Collapse({
  title,
  content,
}: {
  title: string
  content: ReactNode
}) {
  function toggle() {
    console.log('toggling')
  }

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggle}>
        {title}
        <Arrow className="collapse__header--arrow" />
      </div>
      <p className="collapse__content">{content}</p>
    </div>
  )
}
