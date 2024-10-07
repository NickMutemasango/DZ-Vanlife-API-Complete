const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
const app = express(); // Initialize app before using it

// Middleware
app.use(bodyParser.json()); // Use body-parser middleware

// Database connection
mongoose
  .connect("mongodb+srv://vanlife_dz:dzivarasekwahub@vanlife.clrbh.mongodb.net/?retryWrites=true&w=majority&appName=vanlife", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define routes
const userRoutes = require("./routes/userRoutes");
const vanRoutes = require("./routes/vanRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
// const errorMiddleware = require("./middlewares/errorMiddleware");

app.use("/users", userRoutes);
app.use("/vans", vanRoutes);
app.use("/bookings", bookingRoutes);
app.use("/payments", paymentRoutes);
app.use("/reviews", reviewRoutes);

// Error handling middleware
// app.use(errorMiddleware);

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
