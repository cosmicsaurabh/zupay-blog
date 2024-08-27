const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ msg: ["Email already exists"] });
    }

    const salt = await bcrypt.genSalt(10);
    // const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password,
      // password: passwordHash,
    });

    await newUser.save();
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    if (err.name === "ValidationError") {
      // Collect all validation error messages
      const messages = Object.values(err.errors).map((error) => error.message);
      return res.status(400).json({ msg: messages });
    }

    res.status(500).json({ error: err.message });
  }
};

// logging in
exports.login = async (req, res) => {
  try {
    const { _id,email, password } = req.body;
    const id = req.params.id;
    
    
    const user = await User.findOne({ email: email });
    const userkiid = user._id.toString();
    
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
   

    if (!isMatch)
      return res.status(400).json({ msg: "Credentials does not match" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    delete user.password;
    res.status(200).json({ token, user,userkiid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//
