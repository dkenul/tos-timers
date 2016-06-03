import React, { Component, PropTypes } from 'react';

export default class Boss extends Component {
  render () {
    return (
      <li>
        <div className="boss group">
          <img src="/images/earth_archon.jpg" alt="" />
          <div className="name">{this.props.boss.name}</div>
        </div>
        <ul className="dropdown">
          <li className="channel">1</li>
          <li className="channel">2</li>
          <li className="channel">3</li>
          <li className="channel">4</li>
          <li className="channel">5</li>
        </ul>
      </li>
    )
  }
}

Boss.propTypes = {
  boss: PropTypes.object.isRequired,
}
