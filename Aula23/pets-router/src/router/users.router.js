import CustomRouter from "./customRouter.js";

export default class UsersRouter extends CustomRouter {
    init() {
        this.get('/', (req, res) =>{
            res.sendSuccess('Router de users!')
        });
        
        this.post('/', (req, res) =>{
            let user = req.body;
            if(!user.nome) {
                res.sendUserError('Nome é obrigatório!');
            } else {
                res.sendSuccess(user);
            }
        });
    }

}