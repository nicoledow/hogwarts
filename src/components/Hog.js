import React from 'react';

export default class Hog extends React.Component {
   constructor() {
       super()
       this.state = {}
   }

    render() {
        {console.log(this.props.hogData);}
      return (
       <div className="ui eight wide column pigTile">
         <img src={`../${this.props.hogData.name.split(' ').join('_').toLowerCase()}`} />
         <h4>{this.props.hogData.name}</h4>
       </div>
      )
    }
}