import React, { Component } from 'react'
import Channel from './channel.jsx'

export default class Dropdown extends Component {
  putChannels () {
    return this.props.channels.map((channel, i) => {
      return (
        <Channel
          key={i + 1}
          number={i + 1}
          status={channel.status}
          lastKilled={channel.lastKilled}
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
