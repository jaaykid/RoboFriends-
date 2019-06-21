import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/scroll'
import './App.css'

import { setSearchField } from '../actions.js'

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   onSearchChange: (event) => dispatch(setSearchField(event.target.value))
 }
}

class App extends Component {
constructor() {
  super()
  this.state = {
    robots: [],
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => this.setState({robots: users}))
}

render () {
  const { robots } = this.state
  const {searchField, onSearchChange} = this.props 
  const filterRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return !robots.length ?
    <h1>Loading...</h1> :
   (
      <div className='tc'>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);