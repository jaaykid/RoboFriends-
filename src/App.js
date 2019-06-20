import React, { Component } from 'react'
import CardList from './Cardlist'
import SearchBox from './SearchBox'
import Scroll from './scroll'
import './App.css'


class App extends Component {
constructor() {
  super()
  this.state = {
    robots: [],
    searchField: ' '
  }
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => this.setState({robots: users}))
}

onSearchChange = (e) => {
  this.setState({
    searchField: e.target.value
  })
}
render () {
  const filterRobots = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  })
  if(this.state.robots.length === 0 ) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className='tc'>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
      </div>
    );
  }
  }
}




export default App 