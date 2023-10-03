// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {each} = props

  const {id, name, teamImageUrl} = each

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-container">
        <div className="team-name-container">
          <img className="team-img" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
