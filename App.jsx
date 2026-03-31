import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import FindDoctorSearch from './components/FindDoctorSearch';
import ProfileCard from './components/ProfileCard';
import Notification from './components/Notification';
import './index.css';

function App() {
    const [notification, setNotification] = useState(null);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 5000);
    };

    return (
        <Router>
            <Navbar />
            {notification && (
                <Notification 
                    message={notification.message} 
                    type={notification.type} 
                />
            )}
            <Routes>
                <Route path="/" element={<FindDoctorSearch showNotification={showNotification} />} />
                <Route path="/signup" element={<SignUp showNotification={showNotification} />} />
                <Route path="/login" element={<Login showNotification={showNotification} />} />
                <Route path="/profile" element={<ProfileCard showNotification={showNotification} />} />
            </Routes>
        </Router>
    );
}

export default App;
