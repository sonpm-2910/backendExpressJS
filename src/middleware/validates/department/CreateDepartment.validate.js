const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateCreateDepartment = () => {
  return [
    check("name", messagesErrorCommon("Tên phòng").notEmpty).not().isEmpty(),
    check("name", messagesErrorCommon("Tên phòng").mustBeString).isString(),
  ];
};

module.exports = { validateCreateDepartment };
