class HomeController {
  static home(req, res) {
    res.redirect("/login");
  }
}

module.exports = HomeController;
