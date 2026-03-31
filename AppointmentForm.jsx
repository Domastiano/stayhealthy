import React, { useState } from 'react';
import './AppointmentForm.css';

function AppointmentForm({ doctor, onConfirm, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.phone && formData.date && formData.time) {
            onConfirm({ ...formData, doctor: doctor.name });
        }
    };

    return (
        <div className="appointment-modal">
            <div className="appointment-form-container">
                <h3>Book Appointment with {doctor.name}</h3>
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
                    <div className="form-group">
                        <label>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Time:</label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="confirm-btn">Confirm</button>
                        <button type="button" onClick={onCancel} className="cancel-btn">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AppointmentForm;
