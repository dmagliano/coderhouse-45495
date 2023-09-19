import {getUsers} from "../service/data-service.js";

export const getFakeData = async (req, res) => {
    let result = await getUsers()
    if(!result){
        res.status(404).send('Data not available');
    }
    res.send(result)
}