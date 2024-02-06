import './index.scss'
import { Host } from '/src/utils/types'

export default function Profile({ user }: { user: Host }) {
  return (
    <div className="profile">
      <div className="profile__names">
        {user.name.split(' ')[0]}
        <br />
        {user.name.split(' ')[1]}
      </div>
      <img
        src={user.picture}
        alt={'Photo de profil de ' + user.name}
        className="profile__picture"
      />
    </div>
  )
}
