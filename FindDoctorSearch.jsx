import React, { useState } from 'react';
import DoctorCard from './DoctorCard';
import './FindDoctorSearch.css';

const doctorsList = [
    { id: 1, name: 'Dr. John Smith', speciality: 'Cardiologist', experience: 12, rating: 4.8 },
    { id: 2, name: 'Dr. Sarah Johnson', speciality: 'Dermatologist', experience: 8, rating: 4.9 },
    { id: 3, name: 'Dr. Michael Lee', speciality: 'Pediatrician', experience: 15, rating: 4.7 },
    { id: 4, name: 'Dr. Emily Brown', speciality: 'Neurologist', experience: 10, rating: 4.8 },
    { id: 5, name: 'Dr. David Wilson', speciality: 'Orthopedist', experience: 7, rating: 4.6 },
];

function FindDoctorSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(doctorsList);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        if (term === '') {
            setFilteredDoctors(doctorsList);
        } else {
            const filtered = doctorsList.filter(doctor =>
                doctor.speciality.toLowerCase().includes(term)
            );
            setFilteredDoctors(filtered);
        }
    };

    return (
        <div className="doctor-search-container">
            <h2>Find a Doctor</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by specialty (e.g., Cardiologist)"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="doctors-list">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => (
                        <DoctorCard key={doctor.id} doctor={doctor} />
                    ))
                ) : (
                    <p>No doctors found for this specialty.</p>
                )}
            </div>
        </div>
    );
}

export default FindDoctorSearch;
