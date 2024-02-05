import './index.scss'

export default function Tag({ text }: { text: string }) {
  return <div className="tag">{text}</div>
}
