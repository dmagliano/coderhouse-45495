import ToyService from "../services/toy-service.js";

class ToyController {
    
    async getToys(req, res) {

        let toys = await ToyService.getToys();

        return res.send(toys);
    }

    async createToy(req, res) {
        let newToy = req.body;
        if (!newToy.name || !newToy.price || !newToy.stock) {
            return res.status(400).send({ message: "Missing fields" });
        }
        try{
            let toy = await ToyService.createToy(newToy);
            if (!toy) {
                return res.status(400).send("error");
            }
        } catch (error) {
            return res.status(400).send(error.message);
        }
        
        return res.send(toy);
    }
    
    async updateToy(req, res) {
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

export default new ToyController;