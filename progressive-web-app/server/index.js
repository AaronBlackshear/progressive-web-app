const express = require("express");
const bodyParser = require("body-parser");

const mc = require("./controllers/Ctrl");

const app = express();

app.use(bodyParser.json());

app.get("/api/weather", mc.getWeather);

const port = 3001;

app.listen(port, () => {
  console.log(`Live on port ${port}`);
});
