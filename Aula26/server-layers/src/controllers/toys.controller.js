import ToyService from "../services/toys.service.js";

class ToyController {
    
    constructor(){

    }
    
    static async getToys(req, res) {

        let toys = await ToyService.getToys();

        return res.send(toys);
    }

    static async createToy(req, res) {
        let newToy = req.body;
        if (!newToy.name || !newToy.price || !newToy.stock) {
            return res.status(400).send({ message: "Missing fields" });
        }
        let toy = await ToyService.createToy(newToy);
        if (!toy) {
            return res.status(400).send("error");
        }
        return res.send(toy);
    }
    
    static async updateToy(req, res) {
        let id = req.params.id;
        let updatedToy = req.body;
        if (!updatedToy.name || !updatedToy.price || !updatedToy.stock || !id) {
            return res.status(400).send({ message: "Missing fields" });
        } else {
            let toy = await ToyService.updateToy(id, updatedToy);
            if (!toy) {
                return res.status(400).send("error");
            }
            return res.send(toy);
        }
    }

}
export default ToyController;