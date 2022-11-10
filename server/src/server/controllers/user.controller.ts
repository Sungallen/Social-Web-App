import register from "../modules/user.module";

const registerController = (req: any, res: any) => {
  const insertValues = req.body;
  register(insertValues)
    .then((result: any) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
};

export default registerController;
