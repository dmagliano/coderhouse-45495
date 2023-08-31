const soma = (...nums) => {
    if(nums.length === 0) return 0;
    if(!nums.every(num => typeof num === "number")) return null;
  return nums.reduce((acumulador, numAtual) => acumulador + numAtual);
}

console.log("Teste 1: A função deve retornar nulo se algum parametro não for numérico");
let resultTeste1 = soma(1, "1");
if (resultTeste1 === null) {
  console.log("Passou no teste");
}
else console.log(`Falha no teste 1, ${typeof resultTeste1} recebido mas esperado null`);

//"Teste 2: A função deve retornar 0 se nenhum parametro for passado"
console.log("Teste 2: A função deve retornar 0 se nenhum parametro for passado");
let resultTeste2 = soma();
if (resultTeste2 === 0) {
  console.log("Passou no teste");
} else console.log(`Falha no teste 2, ${typeof resultTeste2} recebido mas esperado 0`);

//"Teste 3: A função deve retornar a soma dos dois numeros passados como parametro"
console.log("Teste 3: A função deve retornar a soma dos dois numeros passados como parametro");
let resultTest3 = soma(2, 3);
if (resultTest3 == 5)
{
    console.log("Passou no teste");
} else{
    console.log(`Falha no teste 3, ${resultTest3} recebido mas esperado 5`);
}

//Teste 4: A função deve retornar a soma que todos numeros passados como parametros
console.log("Teste 4: A função deve retornar a soma que todos numeros passados como parametros");
let resultTest4 = soma(1, 2, 3, 4, 5);
if (resultTest4 === 15){
    console.log("Passou no teste");
} else {
    console.log(`Falha no teste 4, ${resultTest4} recebido mas esperado 15`);
}
