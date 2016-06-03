import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  render () {
    return (
      <form className="group">
        <input type="text" name="search" id="search" autocomplete="off" />
        <div className="checkboxes group">
          <div id="up" />
          <div id="down" />
          <div id="unknown" />
        </div>
      </form>
    )
  }
}
