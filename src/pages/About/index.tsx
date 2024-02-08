import Collapse from 'components/Collapse'
import './index.scss'
import 'components/Collapse'
import { useApi } from 'utils/hooks'
import { useEffect, useState } from 'react'
import { CollapseInfo } from 'utils/types'
import Hero from 'components/Hero'
import picture from 'assets/aboutHero.png'

export default function About(): JSX.Element {
  const colapseData = useApi('/data/about.json')
  const [colapseInfo, setCollapseInfo] = useState<CollapseInfo[]>([])

  useEffect(() => {
    setCollapseInfo(
      colapseData.map((item) => {
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
  }, [colapseData])

  return (
    <main className="about content">
      <Hero picture={picture} />
      <div className="about__colapses">
        {colapseInfo.map((colapse) => (
          <Collapse
            title={colapse.title}
            content={colapse.content}
            key={'Collapse-' + colapse.title + '-' + colapse.id}
          />
        ))}
      </div>
    </main>
  )
}
