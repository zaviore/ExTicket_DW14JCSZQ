const models = require("../models");
const User = models.user;

exports.userDetail = async (req, res) => {
  try {
    const id = req.user;
    const data = await User.findOne({
      where: {
        id
      }
    });
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};
