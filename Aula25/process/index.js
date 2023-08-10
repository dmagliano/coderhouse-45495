import {Command} from 'commander';

const program = new Command();

program
    .option('-d', 'Ativa modo debug', false)
    .option('-p, --port <number>', 'Porta para o servidor rodar', '8080')
    .option('--mode <mode>', 'Modo de trabalho', 'prod')
    .requiredOption('-u <user>', 'Usuário para autenticação', 'Nenhum usuario declarado')
    .option('-1, --letter [letters...]', 'Especifique letras', 'A')

program.parse();

console.log('Options: ', program.opts());
console.log('Remaining arguments: ', program.args);