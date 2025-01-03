import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 7000;
const __dirname = path.resolve()


app.use(express.json());

app.use(cors());  // Adjust with the frontend's port

app.use("/api/user", authRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter)


if(process.env.NODE_ENV=== "production")
{
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  // Serve admin UI
  app.use(express.static(path.join(__dirname, "../admin/dist")));

  app.get("/frontend/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });

  // Fallback route for admin UI
  app.get("/admin/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
  connectDB();
});
