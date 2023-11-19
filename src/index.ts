import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const mongoose = require("./infra/db");
const todoRoutes = require("./routes/todo");

const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/todo", todoRoutes);

app.get("/", (req: Request, res: Response) =>
  res.send("GET request to the homepage")
);
app.listen(PORT, () => {
  console.log(`server is running on port:http://localhost:${PORT}`);
});
