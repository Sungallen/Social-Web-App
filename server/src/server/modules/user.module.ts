import query from "../database_operations/operations";

const register = (insertValues: any) =>
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
      .then((result: any) => {
        if (result.affectedRows === 1) {
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
