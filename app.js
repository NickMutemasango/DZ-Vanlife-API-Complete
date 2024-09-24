const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const userRoutes = require("./routes/userRoutes");
// const vanRoutes = require("./routes/vanRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const paymentRoutes = require("./routes/paymentRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");
// const errorMiddleware = require("./middlewares/errorMiddleware");
dotenv.config();
const app = express();
// Database connection
mongoose
  .connect("mongodb+srv://vanlife_dz:dzivarasekwahub@vanlife.clrbh.mongodb.net/?retryWrites=true&w=majority&appName=vanlife", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.use(express.json());
// Define routes
// app.use("/users", userRoutes);
// app.use("/vans", vanRoutes);
// app.use("/bookings", bookingRoutes);
// app.use("/payments", paymentRoutes);
// app.use("/reviews", reviewRoutes);
// // Error handling middleware
// app.use(errorMiddleware);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
