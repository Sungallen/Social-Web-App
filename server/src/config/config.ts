import Joi from "joi";
import * as dotenv from "dotenv";

// require and configure dotenv, will load vars in .env in process.env
dotenv.config();

const envVarSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().default("development").allow("development"), // 字串且預設值為development 並只允許兩種參數
    MYSQL_PORT: Joi.number().default(3306), // 數字且預設值為3306
    MYSQL_HOST: Joi.string().default("127.0.0.1"), // 字串取預設值為127.0.0.1
    MYSQL_USER: Joi.string(), // 字串
    MYSQL_PASS: Joi.string(), // 字串
    MYSQL_NAME: Joi.string(), // 字串
    VERSION: Joi.string(), // 字串
    MYSQL_DATABASE: Joi.string(),
    NEO4J_URL: Joi.string(),
    NEO4J_USER: Joi.string(),
    NEO4J_PASS: Joi.string(),
    NEO4J_DATABASE: Joi.string(),
    ACCESS_TOKEN_SECRET: Joi.string(),
    REFRESH_TOKEN_ACCESS: Joi.string()
  })
  .unknown()
  .required();

const envVars = envVarSchema.validate({
  VERSION: process.env.VERSION,
  NODE_ENV: process.env.NODE_ENV,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASS: process.env.MYSQL_PASS,
  MYSQL_NAME: process.env.MYSQL_NAME,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  NEO4J_URL: process.env.NEO4J_URL,
  NEO4J_USER: process.env.NEO4J_USER,
  NEO4J_PASS: process.env.NEO4J_PASS,
  NEO4J_DATABASE: process.env.NEO4J_DATABASE,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET
});
// process.env 撈取 .env 內的變數做 joi 驗證

// if (error) {
//   throw new Error(`Config validation error: ${error.message}`);
// }

const config = {
  version: envVars.value.VERSION, // API版本
  env: envVars.value.NODE_ENV, // 開發模式(development、production)
  mysqlPort: envVars.value.MYSQL_PORT, // 連接阜號(MYSQL_PORT)
  mysqlHost: envVars.value.MYSQL_HOST, // 主機名稱 (MYSQL_HOST)
  mysqlUserName: envVars.value.MYSQL_USER, // 用戶名稱 (MYSQL_USER)
  mysqlPass: envVars.value.MYSQL_PASS, // 資料庫密碼(MYSQL_PASS)
  mysqlDatabase: envVars.value.MYSQL_DATABASE, // 資料庫名稱(MYSQL_DATABASE)
  neo4jUrl: envVars.value.NEO4J_URL,
  neo4jUser: envVars.value.NEO4J_USER,
  neo4jPass: envVars.value.NEO4J_PASS,
  neo4jDatabase: envVars.value.NEO4J_DATABASE,
  accessToken: envVars.value.ACCESS_TOKEN_SECRET,
  refreshToken: envVars.value.REFRESH_TOKEN_ACCESS
};

export default config; // 匯出共用
