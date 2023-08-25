const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");

const { User } = require("../../models");


const signup = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    status: "Success",
    code: 201,
    message: "User was created",
    data: {
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
      },
    },
  });
};

module.exports = signup;
