import React from 'react';

export default class Hog extends React.Component {
    constructor(hogData) {
        super()
        this.state = {}
    }

    render() {
        {console.log(this.props.hogData);}
      return (
       <div className="ui eight wide column pigTile">
         <h4>{this.props.hogData.name}</h4>
       </div>
      )
    }
}