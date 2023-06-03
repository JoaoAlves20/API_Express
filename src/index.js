const express = require("express");

const routes = require("./routes")

const app = express();

app.use(express.json())
app.use(routes);

app.listen(1807, () => console.log("Server started at http://localhost:1807"));
