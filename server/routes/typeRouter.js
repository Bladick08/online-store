const Router = require("express");
const router = new Router();
router.post("/", (req, res) => {
  res.json({ message: "WORKING" });
});
router.get("/", (req, res) => {
  res.json({ message: "WORKING" });
});

module.exports = router;
