class UserController {
  async registration(req, res) {
    res.json({ message: "registration" });
  }

  async login(req, res) {
    res.json({ message: "login" });
  }

  async check(req, res) {
    const query = req.user;
    res.json({ message: "check" });
  }
}

module.exports = new UserController();
