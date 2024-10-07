// services/userServices.js  
const User = require('../models/userModel'); // Model for User

// Create a new user
const createUser = async (name, email, password) => {
  // Logic for creating a user
  const user = new User({
    name,
    email,
    password, // Note: Password should be hashed in production
    createdAt: new Date(),
  });
  await user.save();
  return user;
};

// Update user profile (e.g., when a host uploads a van or other updates)
const updateUser = async (userId, updates) => {
  try {
    // Find the user by ID and apply updates
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updates }, // Apply updates from the `updates` object
      { new: true } // Return the updated user object
    );

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    throw new Error('Error updating user profile: ' + error.message);
  }
};

module.exports = {
  createUser,
  updateUser, // Export the updateUser function
};

