import express from "express";
import connectDb from "./mongoDb/index.js";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
const app = express();

dotenv.config({
  path: "./.env",
});
app.use(express.json());

connectDb()
  .then(() => {
    app.listen(process.env.port || 4000, () => {
      console.log("server is running on port::--->", process.env.port);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection failed---->", err);
  });

app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
