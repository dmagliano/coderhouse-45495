let impostos = {imposto1: 2341,imposto2: 341,imposto3: 4611,imposto4: 111};

let partChaveValor = Object.entries(impostos);
console.log(partChaveValor);

let propriedades = Object.keys(impostos);
console.log(propriedades);

let apenasValores = Object.values(impostos);
console.log(apenasValores);

let impostosTotais = apenasValores.reduce((valorInicial, valorAcumulado) => valorAcumulado + valorInicial);
console.log(impostosTotais);