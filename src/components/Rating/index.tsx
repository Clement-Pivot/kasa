import './index.scss'
import Inactive from 'assets/star-inactive.svg?react'
import Active from 'assets/star-active.svg?react'

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
