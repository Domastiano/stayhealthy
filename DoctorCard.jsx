import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import './DoctorCard.css';

function DoctorCard({ doctor }) {
    const [showBooking, setShowBooking] = useState(false);
    const [appointmentBooked, setAppointmentBooked] = useState(false);

    const handleBookClick = () => {
        setShowBooking(true);
    };

    const handleCancelAppointment = () => {
        setAppointmentBooked(false);
        setShowBooking(false);
    };

    const handleConfirmBooking = (appointmentData) => {
        setAppointmentBooked(true);
        setShowBooking(false);
    };

    return (
        <div className="doctor-card">
            <h3>{doctor.name}</h3>
            <p className="speciality">Specialty: {doctor.speciality}</p>
            <p className="experience">Experience: {doctor.experience} years</p>
            <p className="rating">Rating: ⭐ {doctor.rating}</p>
            
            {!appointmentBooked ? (
                <button onClick={handleBookClick} className="book-btn">
                    Book Appointment
                </button>
            ) : (
                <div>
                    <p className="booked-confirm">✓ Appointment Booked</p>
                    <button onClick={handleCancelAppointment} className="cancel-btn">
                        Cancel Appointment
                    </button>
                </div>
            )}

            {showBooking && (
                <AppointmentForm 
                    doctor={doctor} 
                    onConfirm={handleConfirmBooking}
                    onCancel={() => setShowBooking(false)}
                />
            )}
        </div>
    );
}

export default DoctorCard;
