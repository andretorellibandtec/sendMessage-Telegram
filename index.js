// módulos;
require("dotenv").config();
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

// middlewares;
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(routes);

// Servidor;
app.listen(process.env.PORT || port);