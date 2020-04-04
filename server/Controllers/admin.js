const models = require("../models");

const User = models.user;
const Station = models.station;
const List = models.liststation;
const Train = models.train;
const Type = models.typetrain;
const Payment = models.payment;

exports.updatePending = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const data = await Payment.findOne({
      where: { id },
    });
    if (data) {
      await data.update({
        status,
      });
      res.send({ data });
    } else {
      res.status(400).json({
        status: "failed",
        code: "400",
        message: "Wrong ID",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.listPayment = async (req, res) => {
  try {
    const data = await Payment.findAll({
      order: [["id", "DESC"]],

      include: [
        {
          model: User,
          as: "iduser",
          attributes: ["name", "email", "gender", "phone"],
        },
        {
          model: Station,
          as: "idstation",
          attributes: [
            "startStation",
            "destination",
            "startTime",
            "arrivalTime",
            "dateStart",
          ],
          include: [
            {
              model: List,
              as: "start",
              attributes: ["code", "name", "city"],
            },
            {
              model: List,
              as: "destiny",
              attributes: ["code", "name", "city"],
            },
            {
              model: Train,
              as: "names",
              attributes: ["name"],
              include: [
                { model: Type, as: "types", attributes: ["type_train"] },
              ],
            },
          ],
        },
      ],
    });
    res.status(200).send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
