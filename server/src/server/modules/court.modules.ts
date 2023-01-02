import query from "../database_operations/operations";
import { ICourt } from "../types/court.type";

export const queryCourts = (): Promise<ICourt[]> =>
  new Promise((resolve, reject) => {
    query("SELECT * FROM courts", [])
      .then((result) => {
        const queryObject: ICourt[] = Object.values(
          JSON.parse(JSON.stringify(result))
        );
        if (queryObject.length !== 0) {
          resolve(queryObject);
        }
      })
      .catch((error) => reject(error));
  });
