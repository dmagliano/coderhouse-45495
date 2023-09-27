import { getClima, getClimaPorCidade } from '../service/clima-service.js';
import { getCidade } from '../service/cep-service.js';

export const getPrevisao = async (req, res) => {
    const city = req.query.id;
    const reponse = await getClima(city);

    res.send(reponse);
};

export const getPrevisoPorCep = async (req, res) => {
    const cep = req.params.cep;
    const {cidade, uf} = await getCidade(cep);
    const response = await getClimaPorCidade({cidade, uf});
    
    res.send(response);
} 