function geraNumeroAleatorio() {
  return Math.floor(Math.random() * 20) + 1;
}

function contadorNumeroAleatorio() {
  const numerosGerados = {};

  for (let i = 0; i < 20; i++) {
    const numeroAleatorio = geraNumeroAleatorio();
    console.log(numeroAleatorio);
    if (numerosGerados[numeroAleatorio]) {
      numerosGerados[numeroAleatorio] += 1;
    } else {
      numerosGerados[numeroAleatorio] = 1;
    }
  }

  return numerosGerados;
}

const contagemNumeroGerados = contadorNumeroAleatorio();
console.log(contagemNumeroGerados);