const Router = require("express");
const router = new Router();

router.post("/registration", (req, res) => {
  res.json({ message: "registration" });
});
router.post("/login", (req, res) => {
  res.json({ message: "login" });
});
router.get("/auth", (req, res) => {
  res.json({ message: "auth" });
});

module.exports = router;
