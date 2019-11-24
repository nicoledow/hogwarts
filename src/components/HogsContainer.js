import React from 'react';
import Hog from './Hog';

export default class HogsContainer extends React.Component {

  render(hogs) {  
    return (
        <div className="ui grid container" id="HogsContainer">
            {console.log(this.props)}
            {this.props.hogs.map(h => < Hog hogData={h} />)}
        </div>
      )
  }
}
