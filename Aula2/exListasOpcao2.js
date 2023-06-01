const objetos = [
    { macas:3, peras:2, carne:1, frango:5, doces:2},
    { macas:1, cafes:1, ovos:6, frango:1, paes:4}
]

const listaItens = {};

objetos.forEach(nomeProsItens => {
    Object.entries(nomeProsItens).forEach(([key, value]) => {
        listaItens[key] = (listaItens[key] || 0) + value;
        console.log(listaItens);
    });
});

console.log(" ")

console.log(listaItens);