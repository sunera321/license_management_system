import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import axiosInstance from '../../axiosInstance';

const RatingReview = ({ moduleId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const validateReview = (text) => {
    const repetitiveLetters = /(.)\1{2,}/;
    if (repetitiveLetters.test(text)) {
      return "Review contains repetitive letters.";
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateReview(review);
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      await axiosInstance.post(`https://localhost:7295/api/Module/${moduleId}/reviews`, { rating, review });
      Swal.fire({
        title: 'Thanks for your review online.',
        text: 'Review submitted successfully!',
        icon: 'success',
        confirmButtonText: 'Close',
        customClass: {
          title: 'swal2-title-large'
        }
      });
      handleClear(); // Clear the fields after successful submission
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleClear = () => {
    setRating(0);
    setReview('');
    setError('');
  };
  
  return (
    <div style={{ padding: '20px', marginLeft: '100px' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>Ratings & Reviews</h2>
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <h3>Enter your rating</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingClick(star)}
                style={{ fontSize: '24px', cursor: 'pointer', color: star <= rating ? 'blue' : '#ccc', marginRight: '5px' }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3>Enter your review (optional)</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <textarea
  value={review}
  onChange={handleReviewChange}
  placeholder="Tell your experience"
  style={{
    width: '400px',
    height: '100px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s'
  }}
  onFocus={(e) => {
    e.target.style.borderColor = '#0D5CB6';
    e.target.style.boxShadow = '0 0 5px rgba(13, 92, 182, 0.5)';
  }}
  onBlur={(e) => {
    e.target.style.borderColor = '#ccc';
    e.target.style.boxShadow = 'none';
  }} 
  />
    {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>} 
            <div>
              <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#0D5CB6', color: 'white', border: 'none', cursor: 'pointer', marginRight: '20px' }}>
                Submit
              </button>
              <button type="button" onClick={handleClear} style={{ padding: '10px 20px', backgroundColor: '#ccc', color: 'black', border: 'none', cursor: 'pointer' }}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RatingReview;
