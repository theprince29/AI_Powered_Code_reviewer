import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URI } from "./config";
import reviewRoutes from "./routes/reviewRoutes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", reviewRoutes);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.error("Mongo error:", err));
