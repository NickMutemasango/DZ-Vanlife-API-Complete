const Van = require('../models/vanModel'); // Model for Van

// Create a new van
const createVan = async (ownerId, make, model, year, pricePerNight) => {
  const van = new Van({
    ownerId,
    make,
    model,
    year,
    pricePerNight,
    available: true, // Example of availability
  });
  await van.save();
  return van;
};

// Fetch a single van by ID
const getVan = async (vanId) => {
  try {
    const van = await Van.findById(vanId);
    if (!van) throw new Error('Van not found');
    return van;
  } catch (error) {
    throw new Error('Error fetching van: ' + error.message);
  }
};

// Fetch all vans with optional search and filter criteria
const getVans = async (searchCriteria = {}) => {
  try {
    const vans = await Van.find(searchCriteria);
    return vans;
  } catch (error) {
    throw new Error('Error fetching vans: ' + error.message);
  }
};

// Fetch all vans uploaded by a specific host
const getVansForHost = async (hostId) => {
  try {
    const vans = await Van.find({ ownerId: hostId });
    return vans;
  } catch (error) {
    throw new Error('Error fetching vans for host: ' + error.message);
  }
};

// Update van information
const updateVan = async (vanId, updates) => {
  try {
    const updatedVan = await Van.findByIdAndUpdate(
      vanId,
      { $set: updates }, // Apply updates
      { new: true } // Return updated van
    );
    if (!updatedVan) throw new Error('Van not found');
    return updatedVan;
  } catch (error) {
    throw new Error('Error updating van: ' + error.message);
  }
};

// Delete a van from the database
const deleteVan = async (vanId) => {
  try {
    const deletedVan = await Van.findByIdAndDelete(vanId);
    if (!deletedVan) throw new Error('Van not found');
    return deletedVan;
  } catch (error) {
    throw new Error('Error deleting van: ' + error.message);
  }
};

module.exports = {
  createVan,
  getVan,
  getVans,
  getVansForHost,
  updateVan,
  deleteVan,
};
