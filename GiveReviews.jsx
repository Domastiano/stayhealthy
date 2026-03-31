import React, { useState } from 'react';
import './GiveReviews.css';

function GiveReviews({ doctorName, onReviewSubmitted }) {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(5);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review.trim()) {
            // Zapisz recenzję
            console.log('Review submitted:', { doctorName, rating, review });
            setSubmitted(true);
            if (onReviewSubmitted) {
                onReviewSubmitted({ doctorName, rating, review });
            }
        }
    };

    return (
        <div className="review-form-container">
            <h3>Write a Review for {doctorName}</h3>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Rating:</label>
                        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
                            <option value="4">⭐⭐⭐⭐ - Good</option>
                            <option value="3">⭐⭐⭐ - Average</option>
                            <option value="2">⭐⭐ - Poor</option>
                            <option value="1">⭐ - Very Poor</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Your Review:</label>
                        <textarea
                            rows="4"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="Share your experience with this doctor..."
                            required
                        />
                    </div>
                    <button type="submit" className="submit-review-btn">
                        Submit Review
                    </button>
                </form>
            ) : (
                <div className="review-success">
                    <p>✓ Thank you for your review!</p>
                    <p>Your feedback has been submitted successfully.</p>
                </div>
            )}
        </div>
    );
}

export default GiveReviews;
