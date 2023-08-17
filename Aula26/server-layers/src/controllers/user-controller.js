import UserService from "../services/user-service.js";

class UserController{

    async createUser(req, res){
        let newUser = req.body;
        if (!newUser.name || !newUser.email || !newUser.password) {
            return res.status(400).send("Missing parameters");
        }
        let user = await UserService.createUser(newUser);
        if (!user) {
            return res.status(400).send("error");
        }
        return res.send(user);
    }

    async getUsers(req, res){
        let users = await UserService.getUsers();
        return res.send(users);
    }

    async getUserById(req, res){
        let id = req.params.id;
        let user = await UserService.getUserById(id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        return res.send(user);
    }

    async deleteUserById(req, res){
        let id = req.params.id;
        let user = await UserService.deleteUserById(id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        return res.send(user);
    }
}

export default new UserController;