const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/converter.html");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
