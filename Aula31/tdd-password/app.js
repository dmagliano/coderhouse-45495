const login = (user, password) => {
    
    if (!user) {
        return "Sem usuario fornecido";
    } 
    if (!password) {
        return "Sem senha fornecida";
    }
    if (password !== 123) {
        return "Senha incorreta";
    }
    if (user !== "coderUser") {
        return "Credenciais incorretas";
    }
    // falta etapa de refatoração do código!
    
    return `Bem vindo, ${user}`;
}

//Se uma senha vazia for passada,logar no console "Sem senha fornecida"
let resultTeste1 = login("user", null);
if (resultTeste1 === "Sem senha fornecida") {
    console.log("Passou no teste 1");
} else {
    console.log(`Falha no teste 1, ${resultTeste1} recebido mas esperado "Sem senha fornecida"`);
}

//Se um usuario vazio for passado, logar no console "Sem usuario fornecido"
let resultTeste2 = login(null, "password");
if (resultTeste2 === "Sem usuario fornecido") {
    console.log("Passou no teste 2");
} else {
    console.log(`Falha no teste 2, ${resultTeste1} recebido mas esperado "Sem usuario fornecido"`);
}

//Se uma senha incorreta for passada, logar no console "Senha incorreta"
let resultTeste3 = login("user", "password");
if (resultTeste3 === "Senha incorreta") {
    console.log("Passou no teste 3");
} else {
    console.log(`Falha no teste 3, ${resultTeste1} recebido mas esperado "Senha incorreta"`);
}

//Se um usuario incorreto for passado, logar no console "Credenciais incorretas"
let resultTeste4 = login("user", 123);
if (resultTeste4 === "Credenciais incorretas") {
    console.log("Passou no teste 4");
} else {
    console.log(`Falha no teste 4, ${resultTeste1} recebido mas esperado "Credenciais incorretas"`);
}

//Se um usuario e senha corretos forem passados, logar no console "Bem vindo, <usuario>"
let resultTeste5 = login("coderUser", 123);
if (resultTeste5 === "Bem vindo, coderUser") {
    console.log("Passou no teste 5");
} else {
    console.log(`Falha no teste 5, ${resultTeste1} recebido mas esperado "Bem vindo, coderUser"`);
}