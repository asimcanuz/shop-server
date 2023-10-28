const express = require("express");
const { sequelize } = require("./models");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync();
app.use("/api", require("./routes/index"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("⚡⚡Started listening on port 3000");
});
