const express = require("express");

const router = express.Router();

router.post("/add", (req, res) => {
  const a = Number(req.body.num1);
  const b = Number(req.body.num2);
    console.log(a,b);
    console.log(a+b);
  res.json({ ans: a+b});
});

router.post("/substract", (req, res) => {
    const a = Number(req.body.num1);
    const b = Number(req.body.num2);
  res.json({ ans: a - b });
});

router.post("/multiply", (req, res) => {
    const a = Number(req.body.num1);
    const b = Number(req.body.num2);
    console.log(a*b);
  res.json({ ans: a * b });
});
router.post("/divide", (req, res) => {
    const a = Number(req.body.num1);
    const b = Number(req.body.num2);
    console.log(a/b);
  res.json({ ans: a / b });
});

module.exports = router;
