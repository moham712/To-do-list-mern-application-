const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//create

router.post("/addTask", async (req, res) => {
  try {
    const { title, body, id } = req.body;
    if (!id || !title || !body) {
      console.log("there is an error in the info ");
      return;
    }
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      existingUser.save();
      res.status(200).json({ list });
    } else {
      console.log("not founded user ");
      return;
    }
  } catch (err) {
    console.log("there is an error in adding task  ");
  }
});
//Update

router.put("/UpdateTask/:id", async (req, res) => {
  const { title, body, email } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const list = await List.findByIdAndUpdate(req.params.id, { title, body });
    list.save().then(() => res.status(200).json({ message: "Task Updated" }));
  }
});

// Delete Function
router.delete("/deleteTask/:id", async (req, res) => {
  console.log("email from router.delete",req.body.email)
  console.log("this req.params.id", req.params.id);
  const email = req.body.email;
  if (!email) {
    console.log("email not found ");
  }
  try {
    const result = await User.updateOne(
      { email },
      { $pull: { list: req.params.id } }
    );

    // Check if user was found
    if (result.matchedCount === 0) {
      return res.status(200).json({ message: "User not found" });
    }

    // Delete the task
    const deletedTask = await List.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(200).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    res.status(200).json({ message: "there is an error from router.delete" });
  }
});

// get

router.get("/getTask/:id", async (req, res) => {
  // Changed to use params for better REST practice
  try {
    const list = await List.find({ user: { $in: [req.params.id] } }).sort({
      createdAt: -1,
    });
    res.status(200).json({ list: list });
  } catch (err) {
    console.log("Error getting tasks: ", err);
    res.status(200).json({ message: "SRA ERROR " });
  }
});
module.exports = router;
