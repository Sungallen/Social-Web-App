import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import router from "./server/routes/index.route";
import fileUpload from "express-fileupload";

const app = express();
app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.use("/api", router);
