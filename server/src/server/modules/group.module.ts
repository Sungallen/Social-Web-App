import query from "../database_operations/operations";
import { IGroup } from "../types/group.type";

// get all groups
export const queryGroups = (): Promise<IGroup[]> =>
  new Promise((resolve, reject) => {
    query("SELECT * FROM Sport_Social.groups", [])
      .then((result) => {
        const queryObject: IGroup[] = Object.values(
          JSON.parse(JSON.stringify(result))
        );
        if (queryObject.length !== 0) {
          resolve(queryObject);
          return;
        }
        if (queryObject.length === 0) {
          console.log("No group found, found 0 groups");
          reject("No group found");
          return;
        } else {
          reject("No group found");
          return;
        }
      })
      .catch((error) => reject(error));
  });

// TODO: finish this function and other CRUD functions
// get group by id
// export const queryGroupById = (id: number): Promise<IGroup> =>
//   new Promise((resolve, reject) => {
//     query("SELECT * FROM Sport_Social.groups WHERE id = ?", [id])
//       .then((result) => {
//         const queryObject: IGroup = Object.values(
//           JSON.parse(JSON.stringify(result))
//         )[0];
//         if (queryObject) {
//           resolve(queryObject);
//           return;
//         }
//         if (!queryObject) {
//           console.log("No group found, found 0 groups");
//           reject("No group found");
//           return;
//         } else {
//           reject("No group found");
//           return;
//         }
//       })
//       .catch((error) => reject(error));
//   });

// create new group
export const insertNewGroup = (group: IGroup): Promise<IGroup> => {
  const queryObject: IGroup = {
    id: group.id,
    number_of_people: group.number_of_people,
    timestamp: group.timestamp,
    title: group.title,
    content: group.content,
    court_id: group.court_id,
    user_id: group.user_id,
  };
  return new Promise((resolve, reject) => {
    query(
      "INSERT INTO Sport_Social.groups (id, number_of_people, timestamp, title, content, court_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        queryObject.id,
        queryObject.number_of_people,
        queryObject.timestamp,
        queryObject.title,
        queryObject.content,
        queryObject.court_id,
        queryObject.user_id,
      ]
    )
      .then((result) => {
        resolve(queryObject);
      })
      .catch((error) => reject(error));
  });
};
