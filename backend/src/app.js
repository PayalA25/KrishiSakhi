import express from "express";
import cors from "cors";
const app = express();
import cookieParser from "cookie-parser";

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes
//import routes
import userRouter from "./routes/user.routes.js"


//routes declaration
app.use("/api/v1/users" , userRouter)

app.get("/work", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Krishi Sakhi Backend",
  });
});

export { app };
