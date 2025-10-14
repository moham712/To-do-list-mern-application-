const mongoose = require("mongoose");
const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://omsifi_db_user:omsifi_db_user@cluster0.x1awyhi.mongodb.net/"
      )
      .then(() => {
        console.log("connected");
      });
  } catch (error) {
    res.status(400).json({
      message: "not Connected",
    });
  }
};
conn();
