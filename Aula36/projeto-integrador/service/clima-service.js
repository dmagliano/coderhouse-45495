import axios from 'axios';

export const getClima = async (cityId) => {

    try {
        const response = await axios.get('https://api.hgbrasil.com/weather', {
            params: {
                woeid: cityId
            }
        });
        const data = response.data;
        console.log('retornando dados de: ' + data.results.city);
        const { city, forecast } = data.results;
        const previsao = previsaoDto(forecast);

        return { city, previsao };
    } catch (error) {
        console.error(error);
    }
}

export const getClimaPorCidade = async ({cidade, uf}) => {
    
    try {
        const response = await axios.get('https://api.hgbrasil.com/weather', {
            params: {
                key: "SUA-CHAVE",
                city_name: `${cidade},${uf}`
            }
        });
        const data = response.data;
        console.log('retornando dados de: ' + data.results.city);
        const { city, forecast } = data.results;
        const previsao = previsaoDto(forecast);

        return { city, previsao };
    } catch (error) {
        console.error(error);
    }
}

function previsaoDto(forecast) {

    let previsao = [];

    forecast.forEach(element => {
        let dia = {
            data: element.date,
            max: element.max,
            min: element.min,
            previsao: element.condition
        };
        previsao.push(dia);
    }
    );

    return previsao;
}

