let objeto1 = {
    propriedade1: 2,
    propriedade2: "b",
    propriedade3: true
};
let objeto2 = {
    propriedade1: "c",
    propriedade2: [2,3,5,8,13]
}

let {propriedade1, propriedade2} = objeto1;
let objeto3 = {...objeto1,...objeto2};

console.log(objeto3);

let objeto4 = {
    a: 1,
    b: 2,
    c: 3
};

let {a,...rest} = objeto4;

console.log(rest);