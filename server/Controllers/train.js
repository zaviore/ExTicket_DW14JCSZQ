const models = require("../models");
const User = models.user;
const Train = models.train;
const typetrain = models.typetrain;

exports.train = async (req, res) => {
  const { name, type } = req.body;

  try {
    const id_user = req.user;
    const check2 = await User.findOne({ where: { id: id_user } });
    const check = await Train.findOne({ where: { name, type } });

    if (check2.role === "admin") {
      if (!check) {
        const train = await Train.create({
          name,
          type
        });
        console.log();
        const data = await Train.findOne({
          where: { name, type },

          include: [
            {
              model: typetrain,
              as: "types",
              attributes: ["id", "type_train"]
            }
          ]
        });
        res.status(201).send({ status: true, message: "success", data });
      } else {
        res.status(400).send({ status: false, message: "name already axist" });
      }
    } else {
      res.status(403).send({ status: false, message: "admin only" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.trainDestroy = async (req, res) => {
  try {
    const { id } = req.params;
    const id_user = req.user;
    const check2 = await User.findOne({ where: { id: id_user } });

    if (check2.role === "admin") {
      const destroy = await Train.destroy({ where: { id } });
      res.status(200).send({ message: "success delete train ", data: { id } });
    } else {
      res.status(401).send({ message: " you are not allowed " });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.detailTrain = async (req, res) => {
  try {
    const data = await Train.findAll({
      attributes: { exclude: ["id_type", "createdAt", "updatedAt"] },
      include: [
        {
          model: typetrain,
          as: "types",
          attributes: ["id", "type_train"]
        }
      ]
    });
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};
