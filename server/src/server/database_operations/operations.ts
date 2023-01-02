import mysql2, { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";
import { MysqlError } from "mysql";
import config from "../../config/config";
import _error from "../helpers/error";

const connectionPool = mysql2.createPool({
  connectionLimit: 10,
  host: config.mysqlHost,
  user: config.mysqlUserName,
  password: config.mysqlPass,
  database: config.mysqlDatabase,
  port: config.mysqlPort,
});

const query = (queryString: string, queryParameter: Array<any> | any) =>
  new Promise<
    | RowDataPacket[]
    | RowDataPacket[][]
    | OkPacket
    | OkPacket[]
    | ResultSetHeader
  >((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => {
      if (connectionError) {
        reject(_error.APIError(connectionError));
      } else {
        connection.query(
          queryString,
          Array.isArray(queryParameter) ? queryParameter : [queryParameter],
          (error, result) => {
            if (error) {
              reject(_error.MySQLError(error));
            } else {
              resolve(result);
            }
            connection.release();
          }
        );
      }
    });
  });

// async function getPool(options = {}) {
//     return await mysql.createPool(optionsClone);
// };

export default query;
