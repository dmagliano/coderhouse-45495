const { Command } = require('commander');
const dotenv = require('dotenv');

const program = new Command();

program
    .option('-p, --port <number>', 'Porta para o servidor rodar', '8080')
    .option('-d, --development', 'Ativa modo de desenvolvimento', false)

program.parse();

console.log('development ', program.opts().development);

const dev = program.opts().development;

dotenv.config({
    path:dev === true ? ".env.dev" : ".env.prod"
});

module.exports = { default:{
    port: process.env.PORT,
    persistence: process.env.PERSISTENCE,
}};