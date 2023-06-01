function calculaIdade(pessoa) {
    let idade;
    let ano = 2023;
    idade = ano - pessoa.ano_nascimento;
    return idade;
}

const pessoa1 = { nome:'Diogo', ano_nascimento:'1986'};

let idade_pessoa = calculaIdade(pessoa1);
console.log(idade_pessoa);
