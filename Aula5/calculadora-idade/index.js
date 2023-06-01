const moment = require('moment');

//variavel que retorna a data atual
const dataAtual = moment();

//data de nascimento do usuario
const dataNascimento = moment('1986-04-26');

// Check if the birthdate is valid
if (dataNascimento.isValid()) {
  //metodos para calculo entre datas
  const diasEntreDatas = dataAtual.diff(dataNascimento, 'days');
  const semanasEntreDatas = dataAtual.diff(dataNascimento, 'weeks');

  console.log(`Dias passados desde seu nascimento: ${diasEntreDatas}`);
  console.log(`Semanas entre nascimento e a data atual: ${semanasEntreDatas}`);
} else {
  console.log('Data denascimento invalida.');
}

