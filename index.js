import express from "express";

const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectMongoDB from "./config/db-config.js";

dotenv.config();

connectMongoDB();

import userRoute from "./routes/users-route.js";
import campaignRoutes from "./routes/campaigns-route.js";
import paymentsRoutes from "./routes/payments-route.js";
import donationsRoutes from "./routes/donations-route.js";
import reportsRoutes from "./routes/reports-route.js";

const port = process.env.PORT || 6000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRoute);
app.use("/api/campaigns", campaignRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/donations", donationsRoutes);
app.use("/api/reports", reportsRoutes);

app.listen(port, () => {
  console.log("Node & Express Server is running successfully");
});
