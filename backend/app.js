import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import { connectDatabase } from "./config/dbConnect.js";
import bodyParser from "body-parser";
import cors from 'cors';



const app = express();

app.use(cors());

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", productRoutes);

app.listen(process.env.PORT, () => {
    console.log(
        `server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    );
});
