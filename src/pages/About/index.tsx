import Collapse from 'components/Collapse'
import './index.scss'
import 'components/Collapse'
import { useAbout } from 'utils/hooks'
import { useEffect, useState } from 'react'
import { CollapseInfo } from 'utils/types'

export default function About() {
  const collapseData = useAbout('http://localhost:3000/about.json')
  const [collapseInfo, setCollapseInfo] = useState<Array<CollapseInfo>>([])

  useEffect(() => {
    setCollapseInfo(
      collapseData.map((item) => ({
        id: item.id,
        title: item.title,
        content: <>{item.content}</>,
      })),
    )
  }, [collapseData])

  return (
    <div className="content">
      {collapseInfo.map((collapse) => (
        <Collapse
          title={collapse.title}
          content={collapse.content}
          key={'Collapse-' + collapse.title + '-' + collapse.id}
        />
      ))}
    </div>
  )
}
