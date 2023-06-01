const fs = require('fs');
const filePath = './dataHoraAtual.txt';

const fichaCliente = {
    nome:'Diogo Magliano',
    endereco:'Rua N casa 33, cep 77777',
    idade:38,
    carros:[
        'celta',
        'fusca'
    ]
}

const operacoesAsync = async() => {

    fs.promises.writeFile(filePath, JSON.stringify(fichaCliente))
    .then(console.log('Arquivo escrito com sucesso'))
   
    
    resultado = await fs.promises.readFile(filePath, 'utf-8')
    //console.log(resultado);
}

operacoesAsync();

let textoJson = '{"nome":"Diogo Magliano","endereco":"Rua N casa 33, cep 77777","idade":38,"carros":["celta","fusca"]}'

console.log(textoJson)
let retornoJson = JSON.parse(textoJson)
console.log(retornoJson)

retornoJson.carros;





