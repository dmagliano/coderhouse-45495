const moment = require('moment');

const dataAtual = moment();
const dataDeNascimento = '1986-04-10';

if(moment(dataDeNascimento, 'YYYY-MM-DD').isValid()){
    let dias = dataAtual.diff(dataDeNascimento, 'days');
    console.log('Dias entre hoje a a data de nascimento: ' + dias);
} else {
    console.log('Data de nascimento invalida');
}