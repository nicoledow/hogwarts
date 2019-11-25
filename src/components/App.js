import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter';
import HogsContainer from './HogsContainer';


class App extends Component {

  constructor() {
    super();
    this.state = { hogSort: 'none'}
    this.hogs = hogs
  }

  sortHogsAlphabetically = e => {
    console.log('in app - sortHogsAlph method');
    this.hogs.sort((hog1, hog2) => {
      if (hog1.name > hog2.name) {
        return 1;
      } else {
        return -1;
      }
    })
    //debugger;
    this.setState({hogSort: e.target.value})
    //console.log('apps hogSort in state was set to e.target.value')
    return this.hogs;
  }

  sortHogsByWeight = e => {
    this.hogs.sort((hog1, hog2) => {
      if (hog1.weight > hog2.weight) {
        return 1;
      } else {
        return -1;
      }
    })
    this.setState({hogSort: e.target.value})
    return this.hogs;
  }

  resetHogSort = () => {
    this.setState({ hogSort: 'none'})
  }

  handleGreasedCheck = () => {
    this.hogs.filter()
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter handleGreasedCheck={this.handleGreasedCheck} resetHogSort={this.resetHogSort} sortHogsAlphabetically={this.sortHogsAlphabetically} sortHogsByWeight={this.sortHogsByWeight} hogs={hogs} hogSort={this.state.hogSort}/>
          < HogsContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
