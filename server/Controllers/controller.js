const models = require("../models");
const Tiket = models.tiket;
const Order = models.order;
const Customer = models.customer;
const jwt = require("jsonwebtoken");

exports.showTiket = async (req, res) => {
  try {
    const data = await Tiket.findAll({});
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { tiket_id, qtt } = req.body;
    const tiket = await Tiket.findOne({ raw: true, where: { id: tiket_id } });
    console.log(tiket);
    await Tiket.update(
      { stock: tiket.stock - qtt },
      { where: { id: tiket_id } }
    );
    await Order.create({
      total: qtt * tiket.harga,
      customer_id: req.customer,
      tiket_id,
      qtt
    });
    res.send({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

exports.showOrder = async (req, res) => {
  try {
    const data = await Order.findAll({});
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { qtt, tiket_id } = req.body;
    const tiket = await Tiket.findOne({ raw: true, where: { id: tiket_id } });
    const total = qtt * tiket.harga;
    await Order.update(
      {
        qtt,
        total
      },
      {
        where: { tiket_id }
      }
    );
    res.send({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

exports.destroyOrder = async (req, res) => {
  try {
    const { tiket_id } = req.params;
    const dataOrder = await Order.findOne({ where: { tiket_id } });
    const dataTiket = await Tiket.findOne({ where: { id: tiket_id } });
    await Order.destroy({
      where: { tiket_id }
    });
    console.log(dataOrder, "woi");
    //untuk mengembalikan nilai yang diambil saat create order
    //contoh: saat create order pada stock tiket berjumlah 10 kita beli 2
    //maka akan menjadi 8. nah ketika kita destroy data ordernya
    //maka stock tiket kembali menjadi 10
    await Tiket.update(
      { stock: dataTiket.stock + dataOrder.qtt },
      { where: { id: tiket_id } }
    );
    res.send({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

exports.register = async (req, res) => {
  try {
    const { name } = req.body;
    const create = await Customer.create({
      name,
      saldo: 0
    });
    console.log(create.id);
    // const {} = create.customer;
    const token = jwt.sign({ customer_id: create.id }, process.env.SECRET_KEY);
    res.send({ message: "success", token, data: create });
  } catch (err) {
    console.log(err);
  }
};

exports.updateSaldo = async (req, res) => {
  try {
    const { saldo } = req.body;
    await Customer.update({
      saldo,
      where: { id: req.customer }
    });
    res.send({ message: "success" });
  } catch (err) {
    console.log(err);
  }
};

exports.thisCustomer = async (req, res) => {
  try {
    const data = await Customer.findOne({
      where: { id: req.customer }
    });
    res.send({ message: "success", data });
  } catch (err) {
    console.log(err);
  }
};
