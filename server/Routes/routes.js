const express = require("express");
const router = express.Router();
// const { login } = require("../Controllers/login");
const { register } = require("../Controllers/register");
const { typetrain, indexType } = require("../Controllers/typetrain");
const { train, trainDestroy, detailTrain } = require("../Controllers/train");
const { login } = require("../Controllers/login");
const { auth } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const { ListStation } = require("../Controllers/liststation");
const { payment, updatePayment, attach } = require("../Controllers/payment");
const { userDetail } = require("../Controllers/user");
const { station, indexstation } = require("../Controllers/station");
const { myticket, detailMyticket } = require("../Controllers/myticket");
const { updatePending, listPayment } = require("../Controllers/admin");

router.get("/", (req, res) => {
  res.send("halo dnia");
});
//LoginRegis
router.post("/login", login);
router.post("/register", register);

//typetrain
router.post("/typetrain", typetrain);
router.get("/typetrains", indexType);

//ListStation
router.get("/ListStat", ListStation);

//Payment
router.put("/updatepayment", auth, updatePayment);
router.post("/payment", auth, payment);
router.post("/upload", upload.single("payment"), attach);
router.get("/listpayment", listPayment);

//Ticket
router.post("/train", auth, train);
router.post("/station", station);
router.get("/mytickets", auth, myticket);
router.get("/myticket/:id", auth, detailMyticket);

//Admin
router.put("/updatepending/:id", updatePending);
router.get("/stations", indexstation);
router.get("/user", auth, userDetail);
router.get("/trains", detailTrain);
router.delete("/traindelete/:id", auth, trainDestroy);

module.exports = router;
