let valoresOriginais = [1,2,3,4,5]
let novosValores = valoresOriginais.map(x=>x+1);
//onsole.log(valoresOriginais);
//console.log(novosValores);

let outrosValores = valoresOriginais.map(x=>x*2);
//let maisValores = valoresOriginais.map(x=>"a");
//console.log(maisValores);

const funcitionCallback = (value) => {
    if(value % 2===0){
        return value;
    } else {
        return "não é par";
    }
}

const verificaPares = valoresOriginais.map(funcitionCallback);
console.log(verificaPares);