import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
import router from "./routes.js";

config();

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//dev
app.use(morgan("dev"));

//add router
router(app);

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`Server run and listening at http://localhost:${PORT}`);
});
