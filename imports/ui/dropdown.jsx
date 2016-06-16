import React, { Component } from 'react'
import Channel from './channel.jsx'

export default class Dropdown extends Component {
  putChannels () {
    return this.props.channels.map((channel, i) => {
      return (
        <Channel
          key={i}
          number={i}
          status={channel.status}
          lastKilled={channel.lastKilled}
          cooldown={this.props.cooldown}
          bossId={this.props.bossId}
        />
      )
    })
  }

  render () {
    return (
      <ul className="dropdown">
        {this.putChannels()}
      </ul>
    )
  }
}
