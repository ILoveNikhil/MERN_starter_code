import express from "express";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

export const app = express();

// Config
config({
  path: "./config/.env",
});

// using middlewares
app.use(cors());
app.use(bodyParser.json());

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

// Using Routers
// app.use("/api/v1", userRouter);

app.get("/", (req, res) => {
  res.send("Home And Working");
});
