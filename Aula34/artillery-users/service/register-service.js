import bcrypt from "bcrypt";
import userMoldel from "../model/user-model.js";

export default class RegisterService {

  saveNewUser = async (user) => {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      let newUser = await userMoldel.create(user);
      console.log('saving new user ' + newUser.id + ' | ' + newUser.name);
      return newUser;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
