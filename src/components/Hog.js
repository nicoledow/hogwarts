import React from 'react';

export default class Hog extends React.Component {
   constructor() {
       super()
       this.state = {}
   }

   getImage = hogName => {
    let formattedName = hogName.split(" ").join("_").toLowerCase();
    let pigPics = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPics;
  };

    render() {
        {console.log(this.props.hogData);}
      return (
        <div className="ui eight wide column">
         <div className="pigTile">
           <h4>{this.props.hogData.name}</h4>
           <img src={this.getImage(this.props.hogData.name)} alt="pig" />
         </div>
       </div>
      )
    }
}