let arrayDeProva = [1,2,3,4,5];

const minhaFunctionMap = (array,callback) => {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        let novoValor = callback(array[i]);
        novoArray.push(novoValor);
    }
    return novoArray;
}

let novoArrayProprio = minhaFunctionMap(arrayDeProva, x=>x*2);
let novoArratComMap = arrayDeProva.map(x=>x*2);

Array.prototype.minhaPropriaFunctionMap = function(callback) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        let novoValor = callback(array[i]);
        novoArray.push(novoValor);
    }
    return novoArray;
}

let arrayProva = [1,2,3,4,5];
let novosValores = arrayProva.minhaPropriaFunctionMap(x=>x+1);