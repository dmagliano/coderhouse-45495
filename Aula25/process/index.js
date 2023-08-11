import config from "./config.js";

console.log(config)

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', exception => {
    console.log(`Exception não tratada`);
});


let num = calculaNumeros();