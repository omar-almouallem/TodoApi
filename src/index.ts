import express,{ Request, Response } from 'express';
import bodyParser from 'body-parser';

import {PORT} from "../src/config/constants"

const mongoose = require('./infra/db'); 
const todoRoutes = require("./routes/todo");  

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/todo', todoRoutes);

app.get("/", (req: Request, res: Response) => res.send("GET request to the homepage"));

app.listen(PORT, () => {
  console.log(`server is running on port:http://localhost:${PORT}`);
});
