const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const academyRoutes = require("./routes/academyRoutes");
const courseRoutes = require("./routes/courseRoutes");
const viewRoutes = require("./routes/viewRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", viewRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/academies", academyRoutes);
app.use("/api/v1/courses", courseRoutes);

module.exports = app;