const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// SIGNUP
exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Внеси email и password",
      });
    }

    
    const user = await User.findOne({ email }).select("+password");

    
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Неточен email или password",
      });
    }

    const token = signToken(user._id);

    res.status(200).json({
      status: "success",
      token,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

// PROTECT middleware
exports.protect = async (req, res, next) => {
  try {
    let token;

   
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    
    if (!token) {
      return res.status(401).json({
        status: "fail",
        message: "Не си логиран. Те молам логирај се.",
      });
    }

    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    
    const currentUser = await User.findById(decoded.id);

    if (!currentUser) {
      return res.status(401).json({
        status: "fail",
        message: "Корисникот повеќе не постои",
      });
    }

    
    req.user = currentUser;

    next();
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "Невалиден токен",
    });
  }
};