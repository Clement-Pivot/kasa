import './index.scss'
import { ReactComponent as Inactive } from '../../assets/star-inactive.svg'
import { ReactComponent as Active } from '../../assets/star-active.svg'

export default function Rating({ stars }: { stars: number }) {
  return (
    <div className="rating">
      {[...Array(5).keys()].map((i) => {
        return i + 1 <= stars ? (
          <Active key={'Rating-' + i} />
        ) : (
          <Inactive key={'Rating-' + i} />
        )
      })}
    </div>
  )
}
