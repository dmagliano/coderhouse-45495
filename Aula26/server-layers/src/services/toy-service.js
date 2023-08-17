import { ToyModel } from "../models/toy-model.js";

class ToyService {

    async createToy(toy) {
        try {
            return await ToyModel.create(toy);
        } catch (error) {
            throw error;
        }
    }

    async getToys() {
        try {
            return await ToyModel.find();
        } catch (error) {
            throw error;
        }
    }

    async updateToy(id, toy) {
        try {
            let result = await ToyModel.updateOne({_id: id}, toy);
            res.send(result);
        } catch (error) {
            console.log("Cannot update toy with mongoose: " + error);
        }
    }

}

export default new ToyService;