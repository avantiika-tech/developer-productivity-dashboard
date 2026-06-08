import express from "express";
import { connectDB } from "./config/db.ts";
import "dotenv/config";

const app = express();

const PORT = process.env.port || 8000;

connectDB(process.env.MONGO_URI!);

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ status: "success" });
});

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));