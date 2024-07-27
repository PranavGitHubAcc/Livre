import express from "express";
const app = express();
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import { connectDatabase } from "./config/dbConnect.js";

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use("/", productRoutes);

app.listen(process.env.PORT, () => {
    console.log(
        `server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    );
});
