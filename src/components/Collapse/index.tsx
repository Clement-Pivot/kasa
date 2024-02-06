import { ReactNode } from 'react'
import './index.scss'

export default function Collapse({
  title,
  content,
}: {
  title: string
  content: ReactNode
}) {
  return (
    <div className="collapse">
      <div className="collapse__header">{title}</div>
      <p className="collapse__content">{content}</p>
    </div>
  )
}
