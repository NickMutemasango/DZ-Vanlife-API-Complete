
const Review = require('../models/Review'); // Model for Review
const Booking = require('../models/Booking'); // Model for Booking (to validate the associated booking)

// Function to create a review
const createReview = async (userId, bookingId, rating, comment) => {
  // Validate booking to ensure it exists and belongs to the user
  const booking = await Booking.findById(bookingId);
  if (!booking || booking.userId.toString() !== userId) {
    throw new Error('Invalid booking or user not permitted to review this booking');
  }

  // Logic for creating a review
  const review = new Review({
    userId,
    bookingId,
    rating,
    comment,
    createdAt: Date.now(),
  });

  await review.save();
  return review;
};

// Fetch all reviews for a host
const getReviewsForHost = async (hostId) => {
  try {
    // Find bookings related to the host
    const bookings = await Booking.find({ hostId });
    const bookingIds = bookings.map((booking) => booking._id);

    // Fetch reviews that are linked to the host's bookings
    const reviews = await Review.find({ bookingId: { $in: bookingIds } });
    return reviews;
  } catch (error) {
    throw new Error('Error fetching reviews for host: ' + error.message);
  }
};

module.exports = {
  createReview,
  getReviewsForHost,
};
