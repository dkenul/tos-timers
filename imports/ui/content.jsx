import React, { Component, PropTypes } from 'react';
import Search from './search.jsx'

export default class Content extends Component {
  render () {
    return (
      <section>
        <div className="wrapper">
          <Search />
        </div>
      </section>
    )
  }
}
