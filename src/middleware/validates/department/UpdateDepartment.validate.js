const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateUpdateDepartment = () => {
  return [
    check("id", messagesErrorCommon("id").notEmpty).not().isEmpty(),
    check("name", messagesErrorCommon("Tên phòng").mustBeString)
      .optional()
      .isString(),
  ];
};

module.exports = { validateUpdateDepartment };
