import User from '../dao/users-dao.js'

const userService = new User();

export const getUser = async (req, res) => {
    let result = await userService.getUsers()
    if(!result){
        res.status(404).send('User not found');
    }
    res.send(result)
}

export const getUserById = async (req, res) =>  {
    const {id} = req.params;
    let result = await userService.getUserById(id);
    if(!result){
        res.status(404).send('User not found');
    }
    res.send(result);
}

export const createUser = async (req, res) => {
    const user = req.body;
    let result = await userService.saveUser(user);
    if(!result){
        res.status(400).send('User not created');
    }
    res.send(result);
}