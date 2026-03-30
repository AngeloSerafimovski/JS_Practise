const mongoose = require("mongoose");

exports.init = async () => {
  try {
    const DB = process.env.DATABASE.replace(
      "<db_password>",
      process.env.DATABASE_PASSWORD
    );

    await mongoose.connect(DB);

    console.log("Uspesno povrzan so MongoDB");
  } catch (err) {
    console.log("Greshka pri konekcija so baza", err.message);
  }
};