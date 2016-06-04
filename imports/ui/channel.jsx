import React, { Component } from 'react'

export default class Channel extends Component {
  render () {
    return (
      <li className="channel group">
        <div>Ch. {this.props.number}</div>
      </li>
    )
  }
}
