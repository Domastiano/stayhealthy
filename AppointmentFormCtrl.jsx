import React, { useState } from 'react';
import './AppointmentFormCtrl.css';

function AppointmentFormCtrl({ onConfirm, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.phone) {
            onConfirm(formData);
        }
    };

    return (
        <div className="appointment-ctrl-container">
            <h3>Instant Consultation</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="confirm-btn">Start Consultation</button>
                    <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default AppointmentFormCtrl;
