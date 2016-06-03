import React, { Component, PropTypes } from 'react';

export default class Boss extends Component {
  constructor () {
    super()
    this.state = {
      showDropdown: false
    }
  }

  toggleDropdown () {
    this.setState({showDropdown: !this.state.showDropdown})
  }

  render () {
    let dropdown =
      <ul className="dropdown">
        <li className="channel">1</li>
        <li className="channel">2</li>
        <li className="channel">3</li>
        <li className="channel">4</li>
        <li className="channel">5</li>
      </ul>

    return (
      <li>
        <div className="boss group" onClick={this.toggleDropdown.bind(this)}>
          <img src="/images/earth_archon.jpg" alt="" />
          <div className="name">{this.props.boss.name}</div>
        </div>

        {this.state.showDropdown ? dropdown : ""}
      </li>
    )
  }
}

Boss.propTypes = {
  boss: PropTypes.object.isRequired,
}
