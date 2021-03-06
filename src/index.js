import React from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './components/formComponent'
import ReactNotifications from './components/commonComponents/reactNotificationsComponent'

ReactDOM.render(<FormComponent />, document.getElementById('root'));
ReactDOM.render(<ReactNotifications />, document.getElementById('body-root'));
