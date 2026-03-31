import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('auth-token') || sessionStorage.getItem('auth-token');

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        sessionStorage.removeItem('auth-token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">StayHealthy</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appointments">Appointments</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                {!isLoggedIn ? (
                    <>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
