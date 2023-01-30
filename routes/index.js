var express = require("express");
var router = express.Router();
const Message = require("../models/messages");

router.post("/message", (req, res) => {
  Message.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  }).then((data) => res.json({ result: true, data: data }));
});

module.exports = router;
