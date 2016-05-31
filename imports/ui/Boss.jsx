import React, { Component, PropTypes } from 'react';

export default class Boss extends Component {
  render() {
    return (
      <li>{this.props.boss.name}</li>
    );
  }
}

Boss.propTypes = {
  boss: PropTypes.object.isRequired,
};
