import { neo4jUserRegister } from "../database_operations/neo4j.operations";
import query from "../database_operations/operations";
import { IRegisterbody, IRegisterRes } from "../types/user.type";

const register = (insertValues: IRegisterbody): Promise<IRegisterRes> =>
  new Promise((resolve, reject) => {
    query(
      "INSERT INTO users (`username`, `gender`, `created_time`, `account`, `password`, `birth`, `email`) VALUE (?, ?, ?, ?, ?, ?, ?)",
      [
        insertValues.username,
        insertValues.gender,
        insertValues.created_time,
        insertValues.account,
        insertValues.password,
        insertValues.birth,
        insertValues.email,
      ]
    )
      .then((result) => {
        if (result.affectedRows === 1) {
          const neo4jResult = neo4jUserRegister(
            `CREATE (n: user {id: ${result.insertId}})`
          );
          neo4jResult.then((result) => {
            console.log(result);
          });
          resolve({
            status: true,
          });
        } else {
          reject({
            status: false,
          });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

export default register;
