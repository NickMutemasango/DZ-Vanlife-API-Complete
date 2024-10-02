const Booking = require('../models/Booking'); // Model for Booking

// Create a new booking
const createBooking = async (userId, hostId, vanId, startDate, endDate) => {
  const pendingApproval = true;
  const isApproved = false;
  const booking = new Booking({
    userId,
    hostId,
    vanId,
    startDate,
    endDate,
    pendingApproval,
    isApproved,
  });
  await booking.save();
  return booking;
};

// Update booking information (e.g., change dates, approval status)
const updateBooking = async (bookingId, updates) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { $set: updates }, // Apply updates from the `updates` object
      { new: true } // Return updated booking
    );
    if (!updatedBooking) throw new Error('Booking not found');
    return updatedBooking;
  } catch (error) {
    throw new Error('Error updating booking: ' + error.message);
  }
};

// Fetch all bookings made by a specific user
const getBookingsForUser = async (userId) => {
  try {
    const bookings = await Booking.find({ userId });
    return bookings;
  } catch (error) {
    throw new Error('Error fetching bookings for user: ' + error.message);
  }
};

// Fetch all bookings for a specific host
const getBookingsForHost = async (hostId) => {
  try {
    const bookings = await Booking.find({ hostId });
    return bookings;
  } catch (error) {
    throw new Error('Error fetching bookings for host: ' + error.message);
  }
};

// Delete a booking (e.g., when canceled by a user)
const deleteBooking = async (bookingId) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    if (!deletedBooking) throw new Error('Booking not found');
    return deletedBooking;
  } catch (error) {
    throw new Error('Error deleting booking: ' + error.message);
  }
};

module.exports = {
  createBooking,
  updateBooking,
  getBookingsForUser,
  getBookingsForHost,
  deleteBooking,
};
