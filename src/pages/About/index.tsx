import Collapse from 'components/Collapse'
import './index.scss'
import 'components/Collapse'
import { useApi } from 'utils/hooks'
import { useEffect, useState } from 'react'
import { CollapseInfo } from 'utils/types'
import Hero from 'components/Hero'
import picture from 'assets/aboutHero.png'

export default function About() {
  const collapseData = useApi('/about.json')
  const [collapseInfo, setCollapseInfo] = useState<CollapseInfo[]>([])

  useEffect(() => {
    setCollapseInfo(
      collapseData.map((item) => {
        if ((item as CollapseInfo).content !== undefined) {
          return {
            id: item.id,
            title: item.title,
            content: <>{(item as CollapseInfo).content}</>,
          }
        } else {
          throw new Error('API data KO.')
        }
      }),
    )
  }, [collapseData])

  return (
    <div className="content">
      <Hero picture={picture} />
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
