const somar = (numero1, numero2) => numero1 + numero2;
const subtrair = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;

const performOperation = (numero1, numero2, callback) => {
    console.log(`Executando uma operação que não sei qual é`);
    let resultado = callback(numero1, numero2);

    console.log(`O resultado da operação é: ${resultado}`);
}

performOperation(2,5, somar);
performOperation(2,5, subtrair);
performOperation(2,5, multiplicar);
performOperation(2,5, dividir);

let resultado = somar(10,11);
console.log(resultado);