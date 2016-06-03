import React, { Component, PropTypes } from 'react';
import Header from './header.jsx'
import Content from './content.jsx'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Content />
      </div>
    );
  }
}
