// Write your code here

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {isLoading: true, teamListC: []}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch(teamsApiUrl)

    const data = await response.json()

    const updateData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({isLoading: false, teamListC: updateData})
  }

  loader = () => {
    ;<Loader type="Oval" color="#ffffff" height={50} width={50} />
  }

  render() {
    const {isLoading, teamListC} = this.state

    return (
      <div className="bg-container">
        <div className="ipl-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="title-dashboard">IPL DASHBOARD</h1>
        </div>

        {isLoading ? (
          this.loader
        ) : (
          <ul className="list">
            {teamListC.map(each => (
              <TeamCard each={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
