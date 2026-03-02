const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../pkg/user/userSchema");

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });

const sendToken = (user, res) => {
  const token = signToken(user._id);

  // не праќаме password назад
  user.password = undefined;

  res.cookie("jwt", token, {
    httpOnly: true,
    // secure: true, // ако си на https
  });

  res.status(200).json({
    status: "success",
    token,
    data: { user },
  });
};

exports.signup = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 12);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashed,
      role: req.body.role, // optional
    });

    sendToken(user, res);
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ status: "fail", message: "Email and password are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({ status: "fail", message: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(401).json({ status: "fail", message: "Invalid credentials" });
    }

    sendToken(user, res);
  } catch (err) {
    res.status(500).json({ status: "fail", message: err.message });
  }
};

exports.protect = async (req, res, next) => {
  try {
    // 1) zemi token (од header ili cookie)
    let token;
    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      return res.status(401).json({ status: "fail", message: "Not logged in" });
    }

    // 2) verifikuvaj token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3) najdi korisnik
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ status: "fail", message: "User no longer exists" });
    }

    req.user = user; // za slednite handlers
    next();
  } catch (err) {
    res.status(401).json({ status: "fail", message: "Invalid/expired token" });
  }
};

exports.restrict = (...roles) => {
  return (req, res, next) => {
    // ako nema uloga vo dozvoleni ulogi-> zabrana
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ status: "fail", message: "You do not have permission" });
    }
    next();
  };
};