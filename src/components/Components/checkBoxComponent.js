import React, { Component } from 'react';
import CheckBox from 'rc-checkbox';

class CheckBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { check: true };

        this.checkBoxHandleChange = this.checkBoxHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    checkBoxHandleChange(event) {
        this.setState({ check: event.target.checked });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.check);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    CheckBox:
                    <CheckBox checked={this.state.value} onChange={this.checkBoxHandleChange} defaultChecked/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CheckBoxForm;