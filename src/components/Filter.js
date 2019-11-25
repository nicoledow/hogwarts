import React from 'react';
import GreasedCheckbox from './GreasedCheckbox';

export default class Filter extends React.Component {
  
   constructor() {
       super()
       this.state = { hogSort: 'none' }
   }

   handleChange = e => {
       console.log('in Filter - handleChange method');
       //debugger;
       //e.preventDefault();
       if (e.target.value === 'name') {
           this.props.sortHogsAlphabetically(e);
       } else if (e.target.value === 'weight') {
           this.props.sortHogsByWeight(e);
       } else {
           this.props.resetHogSort();
       }
   }

    render() {
        return (
            <div>
                <h3>Sort Hogs:</h3>
                <select name="sortingOptionSelect" onChange={e => this.handleChange(e)} className="ui selection dropdown">
                    <option value="default">Choose a Sorting Option</option>
                    <option value="name">Sort By Name</option>
                    <option value="weight">Sort By Weight</option>
                </select>
                < GreasedCheckbox hogs={this.props.hogs} resetHogSort={this.props.resetHogSort} handleGreasedCheck={this.props.handleGreasedCheck}/>
            </div>
          )
    }
}
