import axios from 'axios';

export const getCidade = async (cep) => {

    let url = 'https://viacep.com.br/ws/' + cep + '/json/';
    console.log('getCidade', url);

    try {
        const response = await axios.get(url);
        const cidade = response.data.localidade;
        const uf = response.data.uf;
        console.log('retornando dados de: ' + cidade);
        return { cidade, uf };
    } catch (error) {
        console.error(error);
    }
}