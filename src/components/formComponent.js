import React, { Component } from 'react';
import CheckBox from 'rc-checkbox';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import {createNotification} from './reactNotifications';

import "react-datepicker/dist/react-datepicker.css";
import 'rc-checkbox/assets/index.css';
import 'react-notifications/lib/notifications.css';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            check: true,
            name: '',
            startDate: new Date(),
            selectedOption: null,
            notification: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleSelectCountryChange = this.handleSelectCountryChange.bind(this);
        this.handleNotificationChange = this.handleNotificationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNotificationChange = (event) => {
        this.setState({ notification: event.target.value });
    }

    handleSelectCountryChange = (option) => {
        this.setState({ selectedOption: option });
        console.log(`Option selected:`, option);
    }

    handleStartDateChange(date) {
        this.setState({ startDate: date });
        const createFillAllFieldsError = createNotification('fill-all-fields-error', "Testing notifications");
        createFillAllFieldsError()
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleCheckBoxChange(event) {
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
                    Country:
                    <Select value={this.state.selectedOption} onChange={this.handleSelectCountryChange} options={options}/>
                    CheckBox:
                    <CheckBox checked={this.state.check} onChange={this.handleCheckBoxChange} defaultChecked/><br/>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/><br/>
                    Start Date:
                    <DatePicker selected={this.state.startDate} onChange={this.handleStartDateChange}/><br/>
                    <a href="http://github.com/JedWatson/react-select">Code and Docs on GitHub</a><br/>
                    <input type="text" value={this.state.notification} onChange={this.handleNotificationChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormComponent;