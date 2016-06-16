import React, { Component } from 'react'
import { Bosses } from '../api/bosses.js'

export default class ReportOptions extends Component {
  reportUp () {
    let set = {}
    set['channels.' + this.props.channelNumber + '.status'] = 'up'

    Bosses.update(this.props.bossId, {
      $set: set
    })
  }

  reportDown () {
    let set = {}
    set['channels.' + this.props.channelNumber + '.status'] = 'down'
    set['channels.' + this.props.channelNumber + '.lastKilled'] = new Date
    Bosses.update(this.props.bossId, {
      $set: set
    })
  }

  render () {
    return (
      <ul className="report-options group">
        <li className="report-up" onClick={this.reportUp.bind(this)}/>
        <li className="report-down" onClick={this.reportDown.bind(this)}/>
      </ul>
    )
  }
}
