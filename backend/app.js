import express from "express";
import cors from "cors";
if (process.env.NODE_ENV !== "production") {
  // import { config } from "dotenv";
  // import morgan from "morgan";
  require("dotenv").config();
  app.use(require("morgan")("dev"));
}
import router from "./routes.js";

// config();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//dev

//add router
router(app);

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server run and listening at http://localhost:${PORT}`);
});
