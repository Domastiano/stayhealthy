import React, { useEffect } from 'react';
import './Notification.css';

function Notification({ message, type = 'success' }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            const notification = document.querySelector('.notification');
            if (notification) {
                notification.style.opacity = '0';
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`notification notification-${type}`}>
            <span className="notification-message">{message}</span>
        </div>
    );
}

export default Notification;
