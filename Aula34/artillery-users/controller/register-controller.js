import RegisterService from "../service/register-service.js";

const registerService = new RegisterService();

export const saveUser = async (req, res) => {
  let { name, lastname, email, password } = req.body;
  let user = { name, lastname, email, password };
  let result = await registerService.saveNewUser(user);
  res.send(result);
};
