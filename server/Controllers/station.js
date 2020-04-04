const models = require("../models");
const Station = models.station;
const List = models.liststation;
const Trains = models.train;
const TypeTrain = models.typetrain;
const { Op } = require("sequelize");

exports.station = async (req, res) => {
  const {
    train,
    startStation,
    typetrain,
    dateStart,
    startTime,
    arrivalTime,
    destination,
    price,
    qty
  } = req.body;
  const check = await Station.findOne({
    where: { train, startStation, destination, dateStart, startTime }
  });
  try {
    if (check) {
      res.status(400).send({ message: "data telah ada" });
    } else {
      const station = await Station.create({
        train,
        startStation,
        typetrain,
        dateStart,
        startTime,
        arrivalTime,
        destination,
        price,
        qty
      });
      let tiketData = await Station.findOne({
        where: {
          train,
          startStation
        },

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
          }
        ]
      });
      res.status(200).send({ message: "success", tiketData });
    }
  } catch (err) {
    console.log(err);
  }
};
exports.indexstation = async (req, res) => {
  try {
    const { from, to, date } = req.query;
    // const check = await Station.findAll({ where: { dateStart } });
    console.log(from, to, date, "ASDasdasda sdasdasda");

    if (from === "" && to === "") {
      const data = await Station.findAll({
        order: [["id", "DESC"]],
        include: [
          {
            model: Trains,
            as: "names",
            attributes: ["name"],
            include: [
              {
                model: TypeTrain,
                as: "types",
                attributes: ["type_train"]
              }
            ]
          },
          {
            model: List,
            as: "start",
            attributes: ["code", "name", "city"]
          },

          {
            model: List,
            as: "destiny",
            attributes: ["code", "name", "city"]
          }
        ]
      });
      res.status(200).send({ data });
    } else {
      const data = await Station.findAll({
        where: {
          startStation: from,
          destination: to
        },
        order: [["id", "DESC"]],
        include: [
          {
            model: Trains,
            as: "names",
            attributes: ["name"],
            include: [
              {
                model: TypeTrain,
                as: "types",
                attributes: ["type_train"]
              }
            ]
          },
          {
            model: List,
            as: "start",
            attributes: ["code", "name", "city"]
          },

          {
            model: List,
            as: "destiny",
            attributes: ["code", "name", "city"]
          }
        ]
      });
      res.status(200).send({ data });
    }
  } catch (err) {
    console.log(err);
  }
};
