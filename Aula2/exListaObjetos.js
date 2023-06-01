const objetos = [
    { macas:3, peras:2, carne:1, frango:5, doces:2},
    { macas:1, cafes:1, ovos:6, frango:1, paes:4}
]

const listaItens = new Set();
objetos.forEach(obj => {
    Object.keys(obj).forEach(key => {
        listaItens.add(key);
    });
});

const arrayItens = [...listaItens];

let somaValores = objetos.reduce((acc, obj) => {
    arrayItens.forEach(item => {
        acc[item] = (acc[item] || 0) + (obj[item] || 0);
    });
    return acc;
}, {});

console.log(somaValores);