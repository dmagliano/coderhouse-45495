const fs = require('fs');

const filePath = './dataHoraAtual.txt';

fs.writeFile(filePath, new Date().toLocaleString(), (deuRuim) => {
    if(deuRuim) {
        console.log('Erro ao escrever o arquivo');
        return
    }
    console.log('Arquivo criado com sucesso');
});

fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
        console.log('Erro na leitura do arquivo');
        return;
    }
    console.log('Conteúdo do arquivo: ' + data)
})

