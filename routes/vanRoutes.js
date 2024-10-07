const express = require("express");
const router = express.Router();
const vanService = require("../services/vanService");

// GET all available vans
router.get("/available", async (req, res) => {
  try {
    const vans = await vanService.getAvailableVans();
    res.status(200).json(vans);
  } catch (error) {
    res.status(500).json({ message: "Error fetching available vans", error });
  }
});

// GET van by ID
router.get("/:id", async (req, res) => {
  try {
    const vanId = req.params.id;
    const van = await vanService.getVanById(vanId);
    if (van) {
      res.status(200).json(van);
    } else {
      res.status(404).json({ message: "Van not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching van", error });
  }
});

// POST create a new van
router.post("/", async (req, res) => {
  try {
    const vanData = req.body;
    const newVan = await vanService.createVan(vanData);
    res.status(201).json(newVan);
  } catch (error) {
    res.status(500).json({ message: "Error creating van", error });
  }
});

// PUT update van availability
router.put("/:id/availability", async (req, res) => {
  try {
    const vanId = req.params.id;
    const availability = req.body.availability;
    const updatedVan = await vanService.updateVanAvailability(vanId, availability);
    if (updatedVan) {
      res.status(200).json(updatedVan);
    } else {
      res.status(404).json({ message: "Van not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating van availability", error });
  }
});

// DELETE van by ID
router.delete("/:id", async (req, res) => {
  try {
    const vanId = req.params.id;
    const deletedVan = await vanService.deleteVan(vanId);
    if (deletedVan) {
      res.status(200).json({ message: "Van deleted successfully" });
    } else {
      res.status(404).json({ message: "Van not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting van", error });
  }
});

module.exports = router;
