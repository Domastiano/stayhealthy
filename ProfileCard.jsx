import React, { useState, useEffect } from 'react';
import './ProfileCard.css';

function ProfileCard() {
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser(userData);
            setFormData({
                name: userData.name || '',
                phone: userData.phone || ''
            });
        }
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        const updatedUser = { ...user, ...formData };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setIsEditing(false);
        window.location.reload(); // Re-render after save
    };

    const handleCancel = () => {
        setFormData({
            name: user?.name || '',
            phone: user?.phone || ''
        });
        setIsEditing(false);
    };

    return (
        <div className="profile-card">
            <h2>Profile</h2>
            {user ? (
                <div className="profile-details">
                    {!isEditing ? (
                        <>
                            <p><strong>Name:</strong> {user.name}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Role:</strong> {user.role || 'Patient'}</p>
                            <button onClick={handleEdit} className="edit-btn">Edit Profile</button>
                        </>
                    ) : (
                        <div className="edit-form">
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-actions">
                                <button onClick={handleSave} className="save-btn">Save</button>
                                <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <p>Please login to view your profile.</p>
            )}

            {/* Patient Report Link */}
            <div className="report-section">
                <h3>Patient Report</h3>
                <a href="/patient_report.pdf" target="_blank" rel="noreferrer" className="report-link">
                    View Report
                </a>
            </div>
        </div>
    );
}

export default ProfileCard;
