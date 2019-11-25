import React from 'react';

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
    //    setting state here is ONLY triggering a re-render of the filter form...
    //this.setState({ hogSort: e.target.value })
    //    console.log('state should be changed');
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
            </div>
          )
    }
}
