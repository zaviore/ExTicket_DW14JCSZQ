const models = require("../models");
const list = models.liststation;

exports.ListStation = async (req, res) => {
  try {
    const data = await list.findAll({});

    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};
