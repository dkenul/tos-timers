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
      filteredBosses: props.bosses.map((boss) => (
        <Boss key={boss._id} boss={boss} />
      ))
    })
  }

  filterBosses (e) {
    let seg = e.target.value.toLowerCase()
    this.setState({
      filteredBosses: this.props.bosses.reduce((list, boss) => {
        let query = boss.name.toLowerCase()

        if (query.includes(seg)) {
          list.push(
            <Boss key={boss._id} boss={boss} />
          )
        }

        return list
      }, [])
    })
  }

  render () {
    return (
      <section>
        <div className="wrapper">
          <Search filterBosses={this.filterBosses.bind(this)} />
          <ul className="bosses noselect">
            {this.state.filteredBosses}
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
