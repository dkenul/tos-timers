import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bosses } from '../api/bosses.js';
import Boss from './boss.jsx';

class BossList extends Component {
  putBosses() {
    return this.props.bosses.map((boss) => {
      return <Boss key={boss._id} boss={boss} />
    });
  }

  render () {
    return (
      <ul className="bosses noselect">
        {this.putBosses()}
      </ul>
    )
  }
}

BossList.propTypes = {
  bosses: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    bosses: Bosses.find({}).fetch()
  };
}, BossList);
