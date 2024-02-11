import { useEffect } from 'react'
import './index.scss'

type Props = { text: string }

export default function Tag({ text }: Props): JSX.Element {
  const maxPhoneWidth: number = 768

  useEffect(() => {
    const parent = document.querySelector('.tag') as HTMLDivElement
    const content = document.querySelector('.tag__content') as HTMLDivElement
    if (document.body.getBoundingClientRect().width < maxPhoneWidth) {
      content.style.fontSize = '10px'
    } else {
      content.style.fontSize = '14px'
    }
    while (
      content.getBoundingClientRect().height >
      parent.getBoundingClientRect().height
    ) {
      content.style.fontSize = `${parseInt(content.style.fontSize) - 1}px`
    }
  })

  return (
    <div className="tag">
      <div className="tag__content">{text}</div>
    </div>
  )
}
