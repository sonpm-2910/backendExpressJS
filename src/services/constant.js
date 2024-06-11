const STATUS_RESPONSE = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
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
    notEmpty: `${field} không được bỏ trống`,
    mustBeNumber: `${field} phải là số`,
  };
};

const saltOrRounds = 10;

module.exports = {
  STATUS_RESPONSE,
  pagingResult,
  paginateDefault,
  paginationQuery,
  apiResponseCommon,
  messagesErrorCommon,
  saltOrRounds,
};
