const STATUS_RESPONSE = {
  NOT_FOUND: 404,
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

module.exports = {
  STATUS_RESPONSE,
  pagingResult,
  paginateDefault,
  paginationQuery,
};
