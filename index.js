const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("Hello, practice node server deploy 성공!");
});
app.listen(5000, () => {
  console.log("server on 5000");
});
