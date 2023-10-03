// Write your code here

import './index.css'

const MatchCard = props => {
  const {each} = props

  const {competingTeam, competingTeamLogo, result, matchStatus} = each

  let colorStyle = 'Lost'

  if (matchStatus === 'Won') {
    colorStyle = 'Won'
  }

  return (
    <li className="list-style">
      <div className="each-list">
        <img
          className="comepeting-team-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p>{competingTeam}</p>
        <p>{result}</p>
        <p className={`${colorStyle}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
