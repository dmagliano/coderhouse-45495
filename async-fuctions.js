function soma(valor1, valor2) {
    return new Promise((resolve, reject)=>{
        let result = valor1 + valor2;

        if(valor1 === 0 || valor2 ===0) {
            reject('Operação desnecessária')
        }
        else if(result < 0) {
            reject('Deve retornar valores positivos');
        } else {
            resolve(result)
        }
    })
}

function subtrair(valor1, valor2) {
    return new Promise((resolve, reject)=>{
        let result = valor1 - valor2;

        if(valor1 === 0 || valor2 ===0) {
            reject('Operação invalida')
        }
        else if(result < 0) {
            reject('Deve retornar valores positivos');
        } else {
            resolve(result)
        }
    })
}

function multiplicar(valor1, valor2) {
    return new Promise((resolve, reject)=>{
        let result = valor1 * valor2;

        if(result < 0) {
            reject('Deve retornar valores positivos');
        } else {
            resolve(result)
        }
    })
}

soma(5, 1)
  .then(result => {
    console.log(result);
  })
  .catch(reject => {
    console.log(reject);
  });
