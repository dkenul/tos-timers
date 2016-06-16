import React, { Component } from 'react'
import ReportOptions from './report-options.jsx'

export default class Channel extends Component {
  constructor () {
    super()
    this.interval = null

  }

  componentWillMount () {
    this.interval = setInterval(() => {
      this.forceUpdate()
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  parseCooldown () {
    let diff = this.props.cooldown*60*60*1000 - (Date.now() - this.props.lastKilled.getTime())
    let hours = parseInt((diff/(1000*60*60))%24)
    let minutes = parseInt((diff/(1000*60))%60)
    let seconds = parseInt((diff/1000)%60)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return `Respawns in ${hours}h${minutes}m${seconds}s`
  }

  renderStatus () {
    switch (this.props.status) {
      case 'down':
        return this.parseCooldown()
      case 'up':
        return 'UP'
      default:
        return 'Unknown'
    }
  }

  render () {
    return (
      <li className="channel group">
        <div>Ch. {this.props.number + 1}</div>
        <div>Cooldown: {this.props.cooldown}</div>
        <div>Status: {this.renderStatus()}</div>
        <ReportOptions
          bossId={this.props.bossId}
          channelNumber={this.props.number}
        />
      </li>
    )
  }
}
