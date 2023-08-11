import { Command } from 'commander';
import dotenv from 'dotenv';

const program = new Command();

program
    .option('-p, --port <number>', 'Porta para o servidor rodar', '8080')
    .option('-d, --development', 'Ativa modo de desenvolvimento', false)
    .requiredOption('-u <user>', 'Usuário para autenticação', 'Nenhum usuario declarado')
    .option('-1, --letter [letters...]', 'Especifique letras', 'A')

program.parse();

console.log('development ', program.opts().development);

const dev = program.opts().development;

dotenv.config({
    path:dev === true ? ".env.dev" : ".env.prod"
});

export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: process.env.ADMIN_PASSWORD,
}