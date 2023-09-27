import { getClima } from '../service/clima-service.js';

export const getPrevisao = async (req, res) => {
    const city = req.query.id;
    const reponse = await getClima(city);

    res.send(reponse);
};