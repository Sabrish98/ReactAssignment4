// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: [], isLoading: true, matchCard: [], bannerUrl: ''}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const teamBannerUrl = data.team_banner_url

    const updateData = {
      id: data.latest_match_details.id,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const recentMatch = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,

      secondInnings: each.second_innings,

      umpires: each.umpires,
      venue: each.venue,
    }))

    this.setState({
      latestMatch: updateData,
      isLoading: false,
      matchCard: recentMatch,
      bannerUrl: teamBannerUrl,
    })
  }

  render() {
    const {isLoading, latestMatch, matchCard, bannerUrl} = this.state

    return (
      <div className="bg-teams">
        <div>
          {isLoading ? (
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          ) : (
            <div>
              <div className="team-bg-color">
                <img className="banner-img" src={bannerUrl} alt="team banner" />
              </div>

              <LatestMatch each={latestMatch} key={latestMatch.id} />
              <ul className="recent-match">
                {matchCard.map(each => (
                  <MatchCard each={each} key={each.id} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
