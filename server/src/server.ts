import express from "express";
import { connectDB } from "./config/db.ts";
import authRouter from "./routes/auth.route.ts";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { authMiddleware } from "./middleware/auth.middleware.ts";
import { User } from "./models/user.model.ts";

const app = express();

const PORT = process.env.PORT;

connectDB(process.env.MONGO_URI!);

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    return res.json({ status: "success" });
});

app.get("/profile", authMiddleware, async (req:any , res:any) => {
    const user = await User.findById(req.user.id);
    console.log(req.user);
    return res.json({ status: "success", message: "You are authenticated", user });
});

app.use("/auth/github", authRouter);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));