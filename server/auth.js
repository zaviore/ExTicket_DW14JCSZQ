const jwt = require("jsonwebtoken");
const models = require("./models");
const Customer = models.customer;

exports.auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, process.env.SECRET_KEY);
    const user = await Customer.findOne({ where: { id: data.customer_id } });
    if (!user) {
      throw new Error();
    }
    req.customer = user.id;
    req.token = token;
    next();
  } catch (err) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
