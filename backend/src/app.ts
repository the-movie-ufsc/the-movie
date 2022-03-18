import express from "express";
import userRouter from "./user/route";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api", userRouter);

export default app;
