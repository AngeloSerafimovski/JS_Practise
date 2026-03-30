const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Korisnikot mora da ima ime"],
  },
  email: {
    type: String,
    required: [true, "Korisnikot mora da ima email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Korisnikot mora da ima lozinka"],
    minlength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Potvrdi ja lozinkata"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Lozinkite ne se sovpagjaat",
    },
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;