import React, { Component, PropTypes } from 'react'
import Dropdown from './dropdown.jsx'

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
    let boss = this.props.boss

    return (
      <li>
        <div className="boss group" onClick={this.toggleDropdown.bind(this)}>
          <img src={"/images/bosses/" + boss.img} alt="" />
          <div className="name">{boss.name}</div>
        </div>

        {this.state.showDropdown ? <Dropdown channels={boss.channels} /> : ""}
      </li>
    )
  }
}

Boss.propTypes = {
  boss: PropTypes.object.isRequired,
}
