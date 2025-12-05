const mongoose = require("mongoose");
const conn = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/todo"
    );
    console.log("connected");
  } catch (error) {
    console.log("Connection Failed!");
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
    console.log("Full Error:", error);
  }
};
conn();
