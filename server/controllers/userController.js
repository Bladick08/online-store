const ApiError = require("../error/ApiError");
class UserController {
  async registration(req, res) {
    res.json({ message: "registration" });
  }

  async login(req, res) {
    res.json({ message: "login" });
  }

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.BadRequest("User not found"));
    }
    res.json({ message: "5" });
  }
}

module.exports = new UserController();
