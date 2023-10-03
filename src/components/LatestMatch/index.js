// Write your code here

import './index.css'

const LatestMatch = props => {
  const {each} = props

  const {
    id,
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = each
  return (
    <div className="team-bg-color">
      <p className="latest-match-text">Latest Matches</p>
      <div className="latest-match-container">
        <div className="result-container">
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img
            className="competing-team"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="result-container">
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man Of The Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
