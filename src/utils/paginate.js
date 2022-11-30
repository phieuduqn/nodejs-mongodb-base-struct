/* eslint-disable eqeqeq */
const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 20;
/**
 * Builds sorting
 * @param {string} sort - field to sort from
 * @param {number} order - order for query (1,-1)
 */
const buildSort = (sort, order) => {
  const sortBy = {};
  sortBy[sort] = order;
  return sortBy;
};

/**
 * Builds initial options for query
 * @param {Object} query - query object
 */
const listInitOptions = (query) => {
  const order = query.sortType || -1;
  const sort = query.sortBy || "createdAt";
  const page = parseInt(query.page, 10) || DEFAULT_PAGE;
  const limit = parseInt(query.limit, 10) || DEFAULT_LIMIT;
  const lean = true; //! !(query.lean !== undefined && query.lean != 'false')
  if (query.pagination == "false") {
    return {
      sort: buildSort(sort, order),
      lean,
      pagination: false,
      customLabels: nonPagingCustomLabels,
    };
  }
  const options = {
    sort: buildSort(sort, order),
    lean,
    page,
    limit,
    customLabels: {
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false,
    },
  };

  return options;
};

const nonPagingCustomLabels = {
  page: false,
  limit: false,
  pagingCounter: false,
  meta: false,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: false,
  nextPage: false,
};

export { listInitOptions };
