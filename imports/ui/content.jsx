import React, { Component, PropTypes } from 'react'
import Search from './search.jsx'
import { createContainer } from 'meteor/react-meteor-data'
import { Bosses } from '../api/bosses.js'
import Boss from './boss.jsx'

export default class Content extends Component {
  constructor () {
    super()
    this.state = {
      filteredBosses: []
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      filteredBosses: ((bosses) => {
        let currentBosses = this.state.filteredBosses

        for (let boss of bosses) {

          if (!currentBosses.find((b) => b._id === boss._id))
            currentBosses.push(boss)
        }

        return currentBosses
      })(props.bosses)
    })
  }

  filterByName (e) {
    let seg = e.target.value.toLowerCase()
    this.setState({
      filteredBosses: this.props.bosses.reduce((list, boss) => {
        let query = boss.name.toLowerCase().includes(seg)

        if (query) list.push(boss)
        return list
      }, [])
    })
  }

  filterByStatus (status, e) {
    this.setState({
      filteredBosses: this.state.filteredBosses.reduce((list, boss) => {
        let query = boss.channels.find((channel) => channel.status === status)

        if (query) list.push(boss)
        return list
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
}

export default createContainer(() => {
  return {
    bosses: Bosses.find({}).fetch()
  }
}, Content)
