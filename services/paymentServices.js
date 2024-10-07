const Payment = require('../models/paymentModel'); // Model for Payment
const Booking = require('../models/bookingModel'); // Model for Booking (if needed)

// Function to process payment
const createPayment = async (bookingId, amount, paymentMethod) => {
  // Fetch the booking to ensure it exists and payment details are valid
  const booking = await Booking.findById(bookingId);
  if (!booking) {
    throw new Error('Booking not found');
  }

  // Logic for creating a payment record
  const payment = new Payment({
    bookingId,
    amount,
    paymentMethod,
    status: 'Pending', // Default status can be set to 'Pending'
    createdAt: Date.now(),
  });

  // Here you would typically add code to process the payment using a payment provider

  await payment.save();
  return payment;
};

// Function to fetch a payment by ID
const getPayment = async (paymentId) => {
  try {
    const payment = await Payment.findById(paymentId);
    if (!payment) throw new Error('Payment not found');
    return payment;
  } catch (error) {
    throw new Error('Error fetching payment: ' + error.message);
  }
};

module.exports = {
  createPayment,
  getPayment,
};
