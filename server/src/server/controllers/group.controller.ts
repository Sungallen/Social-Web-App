import { Request, Response } from "express";
import { insertNewGroup, queryGroups } from "../modules/group.module";
import { IGroup } from "../types/group.type";

export const getGroups = (_req: Request, res: Response) => {
  queryGroups()
    .then((result: IGroup[]) => {
      res.send(result);
    })
    .catch((err) => res.send(err).status(400));
};

// insert new group
export const addNewGroup = (req: Request, res: Response) => {
  const group: IGroup = {
    id: 3,
    number_of_people: 3,
    timestamp: "2021-01-01 00:00:00",
    title: "henry",
    content: "test",
    court_id: 3,
    user_id: 3,
  };

  // TODO create a filed in frontend to filled out the group info instead of hard code
  // const group: IGroup = {
  //   id: req.body.id,
  //   number_of_people: req.body.number_of_people,
  //   timestamp: req.body.timestamp,
  //   title: req.body.title,
  //   content: req.body.content,
  //   court_id: req.body.court_id,
  //   user_id: req.body.user_id,
  // };

  insertNewGroup(group)
    .then((result: IGroup) => {
      res.send(result);
    })
    .catch((err) => res.send(err).status(400));
};
