import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter';
import HogsContainer from './HogsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < Filter />
          < HogsContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
