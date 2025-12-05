const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
//sign in

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const FINDuser = await User.findOne({ email: email });
    if (FINDuser) {
      return res.status(200).json({ message: "User exits !!!", found: "true" });
    }
    if (!FINDuser) {
      const hashpassword = bcrypt.hashSync(password);
      const user = new User({ email, username, password: hashpassword }); //we can do ({email:email,username:username,password:password}) but they have the same name so it does not matter
      await user.save().then(() => {
        res
          .status(200)
          .json({ message: "Registration Successful", found: "false" });
      });
    }
  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
});

//SIGN IN

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(200).json({ message: "Please Sign Up first", found: "true" });
    }

    const iscorrectPass = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!iscorrectPass) {
      res.status(200).json({ message: "Incorrect password ", found: "true" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ message: "Log in suceess", found: "false", others });
  } catch (error) {
    res.status(400).json({ message: "User already exists" });
  }
});

router.get("/getUserEmail/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(200).json({message:'kayen error fi get User Email '})
  }
});

module.exports = router;
