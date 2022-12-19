import { neo4jUserRegister } from "../database_operations/neo4j.operations";
import query from "../database_operations/operations";
import { generateAccessToken } from "../helpers/authetication";
import { BKTree } from "../helpers/BKtree";
import { IRegisterbody, IRegisterRes, IUser } from "../types/user.type";

const register = (insertValues: IRegisterbody): Promise<IRegisterRes> =>
  new Promise((resolve, reject) => {
    query(
      "INSERT INTO users (`username`, `gender`, `created_time`, `account`, `password`,  `email`) VALUE (?, ?, ?, ?, ?, ?)",
      [
        insertValues.username,
        insertValues.gender,
        insertValues.created_time,
        insertValues.account,
        insertValues.password,
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

// const searchWords = (): Promise<any> =>
//   new Promise((resolve, reject) => {
//     query("SELECT username FROM users", [])
//       .then((result) => {
//         let words = [];
//         let response = Object.values(JSON.parse(JSON.stringify(result)));
//         response.forEach((element: any) => {
//           const string = element.username.split(" ");
//           words = words.concat(string);
//         });
//         const bkTree = new BKTree(words.length);
//         bkTree.add(words);
//         console.log(bkTree.simWords("Colyb ", 2));
//         resolve(words);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });

// searchWords();

export const loginModule = (account: string, password: string): Promise<any> =>
  new Promise((resolve, reject) => {
    console.log(account, password);
    query("SELECT * FROM users WHERE account = ?", [account])
      .then((result) => {
        let queryObject: IUser[] = Object.values(
          JSON.parse(JSON.stringify(result))
        );
        if (queryObject.length === 0) {
          resolve("The account does not exist");
        } else if (password !== queryObject[0].password) {
          resolve("The password is not correct");
        } else {
          const accessToken = generateAccessToken(queryObject[0])
          resolve({
            user: queryObject,
            token: accessToken});
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

// export const getFriendSug = (account: string): Promise<any> =>
//   new Promise((resolve, reject) => {
//     query();
//   });

export default register;
