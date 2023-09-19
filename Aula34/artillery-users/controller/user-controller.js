import UserService from '../service/user-service.js';

const userService = new UserService();

export const getUsers = async (req, res) => {
    let result = await userService.getUsers();
    if (!result) {
        res.status(404).send('Users not found');
    }
    res.send(result);
};

export const getUserById = async (req, res) => {
    let id = req.params.id;
    let result = await userService.getUserById(id);
    if (!result) {
        res.status(404).send('User not found');
    } else {
    res.send(result);
    }
};