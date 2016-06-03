import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render () {
    return (
      <header>
        <div className="wrapper group">
          <div className="left">ToS Boss Timers</div>
          <div className="right">Logged in as <span className="user">ADMIN</span></div>
        </div>
      </header>
    )
  }
}
