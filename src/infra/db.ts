import mongoose from "mongoose";

import { DB_URL } from "../config/constants";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("connect to mongodb sucses");
  })
  .catch((err: any) => {
    console.log(`Errore: ${err}`);
  });
module.exports = mongoose;
