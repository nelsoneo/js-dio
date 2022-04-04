function calculadora() {
  const operacion = Number(
    prompt(
      "Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)"
    )
  );

  if (!operacion || operacion >= 7) {
    alert("Opção não válida");
    calculadora();
  } else {
    let valor1 = Number(prompt("Insira o primeiro valor:"));
    let valor2 = Number(prompt("Insira o segundo valor:"));

    if (!valor1 || !valor2) {
      alert("Valores não são números");
      calculadora();
    } else {
      function soma() {
        resultado = valor1 + valor2;
        alert(`${valor1} + ${valor2} = ${resultado}`);
      }

      function subtracao() {
        resultado = valor1 - valor2;
        alert(`${valor1} - ${valor2} = ${resultado}`);
      }

      function multiplicacao() {
        resultado = valor1 * valor2;
        alert(`${valor1} * ${valor2} = ${resultado}`);
      }

      function divisao() {
        resultado = valor1 / valor2;
        alert(`${valor1} / ${valor2} = ${resultado}`);
      }

      function divisaoResta() {
        resultado = valor1 % valor2;
        alert(`O resto da divisão entre ${valor1} e ${valor2} = ${resultado}`);
      }

      function potencia() {
        resultado = valor1 ** valor2;
        alert(`${valor1} ** ${valor2} = ${resultado}`);
      }

      switch (operacion) {
        case 1:
          soma();
          novaOperacion();
          break;
        case 2:
          subtracao();
          novaOperacion();
          break;
        case 3:
          multiplicacao();
          novaOperacion();
          break;
        case 4:
          divisao();
          novaOperacion();
          break;
        case 5:
          divisaoResta();
          novaOperacion();
          break;
        case 6:
          potencia();
          novaOperacion();
          break;
      }
    }
  }
}

function novaOperacion() {
  let opcao = Number(
    prompt("Deseja fazer outra operação ? \n 1 - Sim \n 2 - Não")
  );

  switch (opcao >= 1 || opcao <= 2) {
    case opcao == 1:
      calculadora();
      break;
    case opcao == 2:
      alert("Até logo");
      break;

    default:
      alert("Opção não válida");
      novaOperacion();
      break;
  }
}

calculadora();
