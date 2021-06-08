const express = require("express");
const router = require("./routes");
const cors = require("./middleware/cors");

const app = express();

app.use(express.json());
app.use(cors);
app.use(router);

app.listen("3000", () => {
  console.log("The server is on 3000.");
});
