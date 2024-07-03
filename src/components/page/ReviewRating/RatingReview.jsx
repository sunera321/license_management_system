import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import HTTPService from '../../../Service/HTTPService';

const RatingReview = () => {
  const { moduleId } = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([]);
  const [editingReviewId, setEditingReviewId] = useState(null);

  useEffect(() => {
    if (moduleId) {
      fetchReviews();
    }
  }, [moduleId]);

  const fetchReviews = async () => {
    try {
      const response = await HTTPService.get(`/api/Review/${moduleId}`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

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

    if (review.trim() && rating === 0) {
      setError("You must select a rating if you provide a review text.");
      return;
    }

    const validationError = validateReview(review);
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      // if (editingReviewId) {
      //   await HTTPService.put(`/api/Review/review/${editingReviewId}`, {
      //     rating,
      //     reviewText: review
      //   });
      //   Swal.fire({
      //     title: 'Review updated successfully!',
      //     icon: 'success',
      //     confirmButtonText: 'Close',
      //   });
      // } else {
        await HTTPService.post(`/api/Review`, {
          moduleId: parseInt(moduleId),
          rating,
          reviewText: review
        });
        Swal.fire({
          title: 'Thanks for your review!',
          text: 'Review submitted successfully!',
          icon: 'success',
          confirmButtonText: 'Close',
        });
      //}
      handleClear();
      fetchReviews(); // Refresh reviews
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleEdit = (review) => {
    setRating(review.rating);
    setReview(review.reviewText);
    setEditingReviewId(review.id);
  };

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(`/api/Review/${reviewId}`);
      Swal.fire({
        title: 'Review deleted successfully!',
        icon: 'success',
        confirmButtonText: 'Close',
      });
      fetchReviews(); // Refresh reviews
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const handleClear = () => {
    setRating(0);
    setReview('');
    setError('');
    setEditingReviewId(null);
  };

  return (
    <div style={{ padding: '20px', marginLeft: '100px' }}>
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
              <button type="submit" className='px-6 py-2 text-sm font-medium text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-700' style={{ cursor: 'pointer', marginRight: '20px' }}>
                {editingReviewId ? 'Update' : 'Submit'}
              </button>
              <button type="button" onClick={handleClear} className='px-6 py-2 text-sm font-medium transition duration-300 bg-gray-300 rounded-md hover:bg-gray-700' style={{ cursor: 'pointer' }}>
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h3 style={{ fontWeight: 'bold' }}>All Reviews</h3>
        {reviews.map(review => (
          <div key={review.id} style={{ marginBottom: '10px' }}>
            <div>
              <strong>Rating:</strong> {review.rating} ★
            </div>
            <div>
              <strong>Review:</strong> {review.reviewText}
            </div>
            <button
              onClick={() => handleEdit(review)}
              style={{
                marginRight: '10px',
                cursor: 'pointer',
                color: 'blue',
                border: 'none',
                background: 'none',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              <FontAwesomeIcon icon={faPencilAlt} style={{ marginRight: '5px' }} />
              Edit
            </button>
            <button
              onClick={() => handleDelete(review.id)}
              style={{
                cursor: 'pointer',
                color: 'red',
                border: 'none',
                background: 'none',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingReview;
