import UserModel from "../model/user-model.js";

export default class UserService {

    getUsers = async () => {
        try {
            let users = await UserModel.find();
            return users;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    getUserById = async (id) => {
        try {
            let user = await UserModel.findById(id);
            return user;
        } catch (error) {
            console.log('User not found with id: ' + id);
            return null;
        }
    }

}