let selfController;

class ReportController {
  constructor() {
    selfController = this;
  }

  async create() {
    return res.status(STATUS_RESPONSE.OK).json(apiResponseCommon("oke"));
  }
}

module.exports = new ReportController();
