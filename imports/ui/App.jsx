import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bosses } from '../api/bosses.js';
import Header from './header.jsx'
import Boss from './boss.jsx';

class App extends Component {
  putBosses() {
    return this.props.bosses.map((boss) => {
      return <Boss key={boss._id} boss={boss} />
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h1>Hi pls work</h1>

        <ul>
          {this.putBosses()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  bosses: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    bosses: Bosses.find({}).fetch()
  };
}, App);
