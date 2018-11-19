import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class ReactNotifications extends React.Component {
    render() {
        return (
            <div>
                <NotificationContainer />
            </div>
        );
    }
}

export const createNotification = (type, message) => {
    return () => {
        switch (type) {
            case 'info':
                NotificationManager.info(message, 'Info');
                break;
            case 'success':
                NotificationManager.success(message, 'Success');
                break;
            case 'warning':
                NotificationManager.warning(message, 'Warning', 3000);
                break;
            case 'error':
                NotificationManager.error(message, 'Error', 5000, () => {
                    alert('callback');
                });
                break;
            default:
                NotificationManager.info(message, 'Info');
                break;
        }
    }
};

export default ReactNotifications;

