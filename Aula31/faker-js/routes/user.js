import { Router } from "express";
import { generateUser } from "../src/utils.js";

const router = Router();

router.get('/', (req, res) => {
   let users = []
   for(let i = 0; i < 10; i++) {
       users.push(generateUser())
   }
   res.send(users);
});

router.get('/:num', (req, res) => {
    const num  = req.params.num
    let users = []
    for(let i = 0; i < parseInt(num); i++) {
         users.push(generateUser())
    }
    res.send(users);
 });

export default router;