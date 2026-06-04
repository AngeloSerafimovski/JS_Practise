const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');


exports.protect = async (req,res, next) => {
    try{
        let token;


        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req.headers.authorization.split(" ")[1];
        }

        if(!token){
            return res.status(401).json({
                status:"fail",
                message: "You're not logged in",
            });
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        const currentUser = await User.findById(decoded.id);


        if(!currentUser){
            return res.status(401).json({
                status:"fail",
                message:"User no longer excists",
            });
        }

        req.user = currentUser;

        next();
    }
    catch(err){
        res.status(401).json({
            status:"fail",
            message: err.message,
        });
    }
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {

    // proverka dali user rolata e dozvolena
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "fail",
        message: "You do not have permission",
      });
    }

    next();
  };
};