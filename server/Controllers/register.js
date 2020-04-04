const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;

exports.register = async (req, res) => {
  const { name, username, email, password, gender, phone, address } = req.body;
  const role = "user";

  try {
    const user = await User.create({
      name,
      username,
      email,
      password,
      gender,
      phone,
      address,
      role
    });

    if (user) {
      const token = jwt.sign({ user_id: User.id }, process.env.SECRET_KEY);
      res
        .status(200)
        .send({ status: true, message: "Register success", token });
    } else {
      res.status(401).send({ status: false, message: "invalid register" });
    }
  } catch (err) {
    console.log(err);
  }
};
