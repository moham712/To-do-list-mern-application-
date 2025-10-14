const router = require("express").Router;
const User = require("../models/user");
const List = require("../models/list");
const list = require("../models/list");
const user = require("../models/user");


//create 

router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new list({ email, body, user: existingUser });
      await list.save().then(()=>res.status(200).json({list}));
      existingUser.list.push(list);
      await existingUser.save();
    }
  } catch (error) {}
});


//Update 

router.put ("/UpdateTask/:id",async(req,res)=>{
    const {title,body,email}=req.body;
    const existingUser=await User.findOne({email});
    if (existingUser) {
     const list=await List.findByIdAndDelete(req.params.id,{title,body});
        list.save().then(()=>res.status(200).json({message:"Task Updated"}));
    }
})
module.exports = router;
