const User = require('./../models/userModel');
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup =  async ( req, res ) => {

    try{
        const newUser = await User.create({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            passwordConfirm:req.body.passwordConfirm,
        });

        res.status(201).json({
            status:"success",
            data: {
                newUser,
            },
        });
    }
    catch(err){
        res.status(400).json({
            status:"fail",
            message:err.message
        })
    }
}

const signToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn: proccess.env.JWT_EXPIRES_IN,
    });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // proveruvame dali user vnel email  i password
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password",
      });
    }

    // baranje na user po email i zemanje password
    const user = await User.findOne({ email }).select("+password");

    // proverka dali user postoi i password e tocen
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    // kreiranje JWT token
    const token = signToken(user._id);

    // stavanje na token vo cookie
    res.cookie("jwt", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    });

    // vrakjanje response
    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};