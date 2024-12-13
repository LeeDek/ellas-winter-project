import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse incoming requests with JSON payloads

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hey ya :-)");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
