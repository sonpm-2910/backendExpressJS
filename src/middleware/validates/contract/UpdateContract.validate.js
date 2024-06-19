const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateUpdateContract = () => {
  return [check("id", messagesErrorCommon("id").notEmpty).not().isEmpty()];
};

module.exports = { validateUpdateContract };
