import React, { Component, PropTypes } from 'react';
import Search from './search.jsx'
import { createContainer } from 'meteor/react-meteor-data';
import { Bosses } from '../api/bosses.js';
import Boss from './boss.jsx';

export default class Content extends Component {
  constructor () {
    super()
    this.state = {
      filteredBosses: []
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      filteredBosses: props.bosses
    })
  }

  filterByName (e) {
    let seg = e.target.value.toLowerCase()
    this.setState({
      filteredBosses: this.props.bosses.reduce((list, boss) => {
        let query = boss.name.toLowerCase()

        if (query.includes(seg)) {
          list.push(boss)
        }

        return list
      }, [])
    })
  }

  filterByStatus (status, e) {
    this.setState({
      filteredBosses: this.state.filteredBosses.reduce((list, boss) => {
        if (boss.channels.find((channel) => channel.status === status)) {
          list.push(boss)
        }
      }, [])
    })
  }

  putBosses () {
    return this.state.filteredBosses.map((boss) => (
      <Boss key={boss._id} boss={boss} />
    ))
  }

  render () {
    return (
      <section>
        <div className="wrapper">
          <Search filterByName={this.filterByName.bind(this)} />
          <ul className="bosses noselect">
            {this.putBosses()}
          </ul>
        </div>
      </section>
    )
  }
}

Content.propTypes = {
  bosses: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    bosses: Bosses.find({}).fetch()
  };
}, Content);
