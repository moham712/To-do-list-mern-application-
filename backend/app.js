const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("./connection/connec");
const auth = require("./routes/auth");
const list = require("./routes/list");
const path = require("path");

app.use(express.json()); //It takes raw JSON data from the request body and converts it into a JavaScript object that you can access via req.body.

app.get("/", (req, res) => {
  res.send("Hello World ");
});
app.use("/api/v1", auth);
app.use("/api/v2", list);

app.get("/",(req,res)=>{
  app.use(express.static(path.resolve(__dirname,"frontend","dist")));
  res.sendFile(path.resolve(__dirname,"frontend","dist"))
})
app.listen(1000, () => {
  console.log("Server Started .....");
});
