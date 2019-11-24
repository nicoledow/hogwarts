import React from 'react';

export default class Filter extends React.Component {
  
   constructor() {
       super()
       this.state = {}
   }

   handleChange = e => {
       this.setState({ value: e.target.value })
   }

    render() {
        return (
            <div>
                <h3>Sort Hogs:</h3>
                <select value="Sort By" className="ui selection dropdown" onChange={e => this.handleChange(e)}>
                    <option value="name">Sort By Name</option>
                    <option value="weight">Sort By Weight</option>
                </select>
            </div>
          )
    }
}
