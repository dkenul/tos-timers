import React, { Component, PropTypes } from 'react';

export default class Search extends Component {
  constructor () {
    super()
    this.state = {
      upFilter: false,
      downFilter: false,
      unknownFilter: false
    }
  }

  addCheckboxes () {
    let checkboxes = ['up', 'down', 'unknown'].map((el, i) => (
      <div
        id={el}
        key={i}
        className={this.state[`${el}Filter`] ? "clicked" : ""}
        onClick={this.handleClick.bind(this, el)}
      />
    ))

    return (
      <div className="checkboxes group">
        {checkboxes}
      </div>
    )
  }

  handleClick (el) {
    let state = {}
    let key = `${el}Filter`
    state[key] = !this.state[key]
    this.setState(state)
  }

  render () {
    return (
      <form className="group">
        <input type="text" name="search" id="search" autocomplete="off" />
        {this.addCheckboxes()}
      </form>
    )
  }
}
