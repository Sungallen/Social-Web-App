import config from "../../config/config";
import httpStatus from "http-status";
import { MysqlError } from "mysql";
import { QueryError } from "mysql2";

function APIError(message: any) {
  return {
    message,
    status: httpStatus.BAD_REQUEST,
    isDev: config.env === "development",
    code: 400,
  };
}
function MySQLError(error: QueryError) {
  return {
    message: error.message,
    sql: error.sqlStateMarker,
    status: httpStatus.INTERNAL_SERVER_ERROR,
    isDev: config.env === "development",
    code: 500,
  };
}
export default {
  APIError,
  MySQLError,
};
