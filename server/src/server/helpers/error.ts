import config from "../../config/config";
import httpStatus from "http-status";
import { MysqlError } from "mysql";
function APIError(message: any) {
  return {
    message,
    status: httpStatus.BAD_REQUEST,
    isDev: config.env === "development",
    code: 400,
  };
}
function MySQLError(error: any) {
  return {
    message: error.sqlMessage,
    sql: error.sql,
    status: httpStatus.INTERNAL_SERVER_ERROR,
    isDev: config.env === "development",
    code: 500,
  };
}
export default {
  APIError,
  MySQLError,
};
