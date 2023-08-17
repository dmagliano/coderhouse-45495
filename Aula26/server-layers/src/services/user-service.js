import { UserModel } from "../models/user-model.js";

class UserService {

    async createUser(user) {
        try {
            return await UserModel.create(user);
        } catch (error) {
            throw error;
        }
    }

    async getUsers() {
        try {
            return await UserModel.find();
        } catch (error) {
            throw error;
        }
    }

    async getUserById(id) {
        try {
            return await UserModel.findById(id);
        } catch (error) {
            throw error;
        }
    }

    async deleteUserById(id) {
        try {
            return await UserModel.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

}

export default new UserService;