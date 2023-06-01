const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject)=>{
        if(divisor===0) {
            reject('Não pode dividir por zero')
        }
        else {
            resolve(dividendo/divisor);
        }
    })
}

let prom = new Promise


dividir(6,3)
.then(resultado => {
    console.log(resultado)
}).catch(err)