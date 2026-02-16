//! npm init -y
//!npm install mongoose
//!npm install express
//! Extensions: Material Icon Theme

const express = require("express");
const mongoose = require("mongoose");
const blogControler = require("./controller/blogControler");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect("mongodb+srv://aleksandar:YRzFP7MITu4YfYZo@cluster0.dle0u6v.mongodb.net/semos1?appName=Cluster0")
  .then(() => {
    console.log("Succesfully conected");
  })
  .catch((err) => console.log(err.message));

app.get("/api/v1/blogs", blogControler.getAllBlogs);
app.get("/api/v1/blogs/:id", blogControler.getBlog);
app.post("/api/v1/blogs", blogControler.createBlog);
app.patch("/api/v1/blogs/:id", blogControler.updateBlog);
app.delete("/api/v1/blogs/:id", blogControler.deleteBlog);

// app.get("/", blogControler.homepage);

app.listen(10000, (err) => {
  if (err) return console.log(err.message);
  console.log("Successfully started the backend");
});