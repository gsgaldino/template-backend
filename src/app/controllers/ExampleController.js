class ExampleController {
  static index(req, res) {
    res.json({
      success: true,
      message: 'yo',
    });
  }

  static create(req, res) {
    res.json({
      success: true,
      message: 'success',
    });
  }
}

module.exports = ExampleController;
