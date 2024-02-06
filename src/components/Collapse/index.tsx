import './index.scss'

export default function Collapse({
  title,
  content,
}: {
  title: string
  content: string | string[]
}) {
  console.log(typeof content)
  console.log(content)
  return <div></div>
}
