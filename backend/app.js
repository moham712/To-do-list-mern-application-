const express = require("express");
const app = express();
require("./connection/connec");
const auth = require("./routes/auth");
const list=require("./routes/list")

app.use(express.json()); //It takes raw JSON data from the request body and converts it into a JavaScript object that you can access via req.body.
app.get("/", (req, res) => {
  res.send("Hello World ");
});
app.use("/api/v1", auth);
app.use("/api/v 2",list)
app.listen(1000, () => {
  console.log("Server Started .....");
});
