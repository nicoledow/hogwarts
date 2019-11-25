import React from 'react';

export default class GreasedCheckbox extends React.Component {
    constructor() {
        super();
        this.state = {checked: false}
    }

    handleCheck = () => {
        if (this.state.checked === true) {
            this.setState({checked: false})
            this.props.resetHogSort();
        } else {
            this.setState({checked: true})
            this.props.handleGreasedCheck();
        }
    }

    render() {
        return(
            <div className="ui checkbox">
                <input type="checkbox" onClick={this.handleCheck}/>
                <label>Greased Pigs ONLY</label>
            </div>
        )
    }
}