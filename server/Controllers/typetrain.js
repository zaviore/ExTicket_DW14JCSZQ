const models = require("../models");
const typeTrain = models.typetrain;

exports.typetrain = async (req, res) => {
  const { type_train } = req.body;

  try {
    const data = await typeTrain.create({ type_train });

    res.status(200).send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.indexType = async (req, res) => {
  try {
    const data = await typeTrain.findAll({});

    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};
