function calcularFibonacci(numero) {
  let pertence = false;
  let penultimoNumero = 0;
  let ultimoNumero = 1;
  let resultadoAuxiliar;

  console.log("Sequência de Fibonacci até " + numero + ":");

  if (numero === 0) {
    console.log(penultimoNumero);
    return;
  }

  console.log(penultimoNumero);

  while (ultimoNumero <= numero) {
    ultimoNumero === numero ? (pertence = true) : false;

    console.log(ultimoNumero);
    resultadoAuxiliar = penultimoNumero + ultimoNumero;
    penultimoNumero = ultimoNumero;
    ultimoNumero = resultadoAuxiliar;
  }

  if (pertence) {
    console.log(
      "O numero informado (" + numero + ") faz parte da sequência de Fibonacci."
    );
  } else
    console.log(
      "O numero informado (" +
        numero +
        ") não faz parte da sequência de Fibonacci."
    );
}

// Teste
calcularFibonacci(15); // Exemplo de teste com numero 14
