const Blog = require("../model/blogModel");

exports.createBlog = async (req, res) => {
  // const blog = {
  //   title: req.body.title,
  //   tekst: req.body.tekst,
  //   ocenka: req.body.ocenka,
  // };

  // const newBlog = new Blog(req.body);
  // newBlog.save();

  const newblog = await Blog.create(req.body);

  res.status(201).json({
    status: "Success",
    data: {
      blog: newblog,
    },
  });

  try {
  } catch (err) {
    res.status(501).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.getBlog = async (req, res) => {
  try {
    const contendId = req.params.id;
    const blog = await Blog.findById(contendId);
    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    console.log("test");
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    console.log(blog);

    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "Fail",
      message: err.message,
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(501).json({
      status: "Fail",
      message: err.message,
    });
  }
};

//127.0.0.1:10000/api/v1/blogs?ocenka=4&prosek=300

exports.getAllBlogs = async (req, res) => {
  try {
    console.log(req.query);

    // prv nacin na implementacija na query
    // const blogs = await Blog.find({
    //   ocenka: 4,
    //   naslov: "kompjuter",
    // });

    // vtor nacin na implementacija na query
    // const blogs = await Blog.find().where("ocenka").equals(4);

    // tret nacin
    const blogs = await Blog.find(req.query);

    const queryObj = { ...req.query };

    res.status(200).json({
      status: "Success",
      data: {
        blogs,
      },
    });
  } catch (err) {
    res.status(501).json({
      status: "Fail",
      message: err.message,
    });
  }
};

//! req.body
//! req.params
//! req.query