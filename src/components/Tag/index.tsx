import './index.scss'

type Props = { text: string }

export default function Tag({ text }: Props): JSX.Element {
  return <div className="tag">{text}</div>
}
