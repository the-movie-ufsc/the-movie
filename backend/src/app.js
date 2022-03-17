import express from "express";
import requisitionRouter from "./requisition/route";

const app = express();

app.use(express.json());

app.use("/api", requisitionRouter);

export default app;
