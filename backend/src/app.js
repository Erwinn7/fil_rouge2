const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(cors({
    origin: [
        "http://localhost:4200",
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:3002"
    ],
    credentials: true,
}));

app.use(express.json());
app.use("/api", routes);
app.use(errorMiddleware);

module.exports = app;
