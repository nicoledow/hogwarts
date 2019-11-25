import React from 'react';

export default class Filter extends React.Component {
  
   constructor() {
       super()
       this.state = {}
   }

   handleChange = e => {
       e.preventDefault();
       this.setState({ value: e.target.value })
       if (this.state.value === 'name') {
           this.props.sortHogsAlphabetically();
       } else if (this.state.value === 'weight') {
           this.props.sortHogsByWeight();
       }
   }

    render() {
        return (
            <div>
                <h3>Sort Hogs:</h3>
                <select value="Sort By" className="ui selection dropdown" onChange={e => this.handleChange(e)}>
                    <option value="selectAnOption">Select a sorting option:</option>
                    <option value="name">Sort By Name</option>
                    <option value="weight">Sort By Weight</option>
                </select>
            </div>
          )
    }
}
