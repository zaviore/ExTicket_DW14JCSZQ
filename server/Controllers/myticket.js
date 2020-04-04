const models = require("../models");
const Payment = models.payment;
const User = models.user;
const Station = models.station;
const List = models.liststation;
const Train = models.train;
const Type = models.typetrain;

exports.myticket = async (req, res) => {
  try {
    const id_user = req.user;
    const data = await Payment.findAll({
      where: {
        id_user
      },

      order: [["id", "DESC"]],

      include: [
        {
          model: User,
          as: "iduser",
          attributes: ["name", "email", "gender", "phone"]
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
            "price"
          ],
          include: [
            {
              model: List,
              as: "start",
              attributes: ["code", "name", "city"]
            },
            {
              model: List,
              as: "destiny",
              attributes: ["code", "name", "city"]
            },
            {
              model: Train,
              as: "names",
              attributes: ["name"],
              include: [
                { model: Type, as: "types", attributes: ["type_train"] }
              ]
            }
          ]
        }
      ]
    });
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};

exports.detailMyticket = async (req, res) => {
  try {
    const id_user = req.user;
    const data = await Payment.findOne({
      where: {
        id: id_user
      },
      include: [
        {
          model: User,
          as: "iduser",
          attributes: ["name", "email", "gender", "phone"]
        },
        {
          model: Station,
          as: "idstation",
          attributes: [
            "startStation",
            "destination",
            "startTime",
            "arrivalTime",
            "dateStart"
          ],
          include: [
            {
              model: List,
              as: "start",
              attributes: ["code", "name", "city"]
            },
            {
              model: List,
              as: "destiny",
              attributes: ["code", "name", "city"]
            },
            {
              model: Train,
              as: "names",
              attributes: ["name"],
              include: [
                { model: Type, as: "types", attributes: ["type_train"] }
              ]
            }
          ]
        }
      ]
    });
    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
  }
};
