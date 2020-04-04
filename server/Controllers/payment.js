const models = require("../models");
const Station = models.station;
const Payment = models.payment;

exports.payment = async (req, res) => {
  try {
    const id_user = req.user;

    const { id_station, qtt, date } = req.body;
    const check = await Station.findOne({ where: { id: id_station } });
    console.log(id_user);

    await Station.update(
      { qty: check.qty - qtt },
      { where: { id: id_station } }
    );
    await Payment.create({
      total: qtt * check.price,
      id_user,
      id_station,
      status: "pending",
      date,
      qty: qtt,
    });
    res.send({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const id_user = req.user;
    const { attachment } = req.body;

    await Payment.update(
      {
        attachment,
      },
      {
        where: { id_user },
      }
    );
    res.send({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

exports.attach = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.body;

    if (!filename) {
      res.status(400).json({
        status: "failed",
        code: "400",
        message: "Please upload file",
      });
    } else {
      const photo = await Payment.update(
        {
          attachment: filename,
        },
        { where: { id } }
      );
      res.status(200).json({
        status: "success",
        code: "200",
        message: "file has been upload",
        data: filename,
        photo,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
