import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter';
import HogsContainer from './HogsContainer';


class App extends Component {

  constructor() {
    super();
    this.state = {}
    this.hogs = hogs
  }

  sortHogsAlphabetically = () => {
    this.hogs = this.hogs.sort(function(hog1, hog2) {
      return hog1.name.localeCompare(hog2.name);
    });
  }

  sortHogsByWeight = () => {
    this.hogs = this.hogs.sort(function(hog1, hog2) {
      return hog1.weight - hog2.weight;
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter sortHogsAlphabetically={this.sortHogsAlphabetically} sortHogsByWeight={this.sortHogsByWeight} hogs={hogs} />
          < HogsContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
