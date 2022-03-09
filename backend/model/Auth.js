const { model, Schema } = require("mongoose");
const {JWT_SECRET,JWT_EXPIRE} = require('../config')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AuthSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please add username"],
    },
    email: {
      type: String,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ],
      unique: true,
      required: [true, "Please add email valid email address"],
    },
    
    role: {
      type: String,
      enum: ["user", "publisher"],
      default: "user",
    },
    password: {
      type: String,
      required: [true, "Please add a Password"],
      minlength: 6,
      select: false,
    },
    resetPasswordToken: String,
    resetPasswordExpires: String,
  },
  { timestamps: true }
);

// ?hash password
AuthSchema.pre("save", async function () {
  let salt = await bcrypt.genSalt(10);
  console.log(this);
  this.password = await bcrypt.hash(this.password, salt);
});

//?Way to create a custom method
AuthSchema.methods.getJWTtoken = function () {
  return jwt.sign({id:this._id},JWT_SECRET,{expiresIn:JWT_EXPIRE})
}

module.exports = model("user", AuthSchema);
