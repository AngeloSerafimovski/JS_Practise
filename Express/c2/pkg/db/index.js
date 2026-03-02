const mongoose = require("mongoose");

exports.init = async () => {
  try {
    const DB = process.env.DATABASE.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD
    );

    await mongoose.connect(DB);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.log("Database connection error:", err.message);
    process.exit(1);
  }
};