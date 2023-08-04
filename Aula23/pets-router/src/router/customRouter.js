import { Router } from "express"

export default class CustomRouter {

    constructor() {
        this.router = Router()
        this.init();
    }

    getRouter() {
        return this.router;
    }

    init() {}

    get(path,...callbacks) {
        this.router.get(path,this.generateCustomReponses,this.applyCallbacks(callbacks))
    }
    
    post(path,...callbacks) {
        this.router.post(path,this.generateCustomReponses,this.applyCallbacks(callbacks))
    }

    applyCallbacks(callbacks) {
        return callbacks.map((callback) => async(...params)=>{
            try {
                await callback.apply(this, params);
            } catch (error) {
                console.log(error)
                params[1].status(500).send(error);
            }
        })
    }

    generateCustomReponses(req, res, next) {
        res.sendSuccess = data => res.status(200).send({status:"success",data});
        res.sendError = erro => res.status(500).send({status:"error",erro});
        res.sendUserError = erro => res.status(400).send({status:"error", erro});
        next();
    }

}
