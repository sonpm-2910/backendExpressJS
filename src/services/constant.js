const STATUS_RESPONSE = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  TOKEN_EXPIRED: 403,
  PERMISSION_DENIED: 405,
  OK: 200,
};

const paginateDefault = {
  page: 1,
  limit: 10,
};

const pagingResult = (sequelizeResult, page, limit) => {
  return {
    page: page,
    limit: limit,
    total: sequelizeResult.count,
    data: sequelizeResult.rows,
  };
};

const paginationQuery = (page, limit) => {
  return {
    offset: (Number(page) - 1) * limit,
    limit,
  };
};

const apiResponseCommon = (result, message) => {
  return {
    result,
    message: message || "",
  };
};

const messagesErrorCommon = (field) => {
  return {
    mustBeString: `${field} phải là 1 chuỗi`,
    mustBeBoolean: `${field} phải là boolean`,
    mustBeArray: `${field} phải là array`,
    notEmpty: `${field} không được bỏ trống`,
    mustBeNumber: `${field} phải là số`,
    inValid: `${field} không đúng định dạng`,
  };
};

const saltOrRounds = 10;

const handleNumberWithMaxLength = (num, length = 3) => {
  return Number(num).toString().padStart(length, "0");
};

const STATUS_DOCUMENT = {
  approve: "approve",
  processing: "processing",
  comment: "comment",
  complete: "complete",
};

module.exports = {
  STATUS_RESPONSE,
  pagingResult,
  paginateDefault,
  paginationQuery,
  apiResponseCommon,
  messagesErrorCommon,
  handleNumberWithMaxLength,
  saltOrRounds,
  STATUS_DOCUMENT,
};
