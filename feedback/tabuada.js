// Obtém referência para os elementos do HTML
const form = document.querySelector('form');
const entradaNumero = document.querySelector('#inNumero');
const preResultado = document.querySelector('pre');
const respsoma = document.querySelector('h3');


form.addEventListener("submit",(e) => {
  e.preventDefault(); // Impede o envio do formulário

  // Limpa o resultado anterior
  preResultado.innerText = '';
  let soma = 0;

  // Obtém o número digitado pelo usuário
  const numero = parseInt(entradaNumero.value);

  // Cria a tabuada
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    preResultado.innerText+= `${numero} x ${i} = ${resultado}\n`;
    soma += resultado;
  }
  respsoma.innerText = "A soma dos resultados é: "+soma;
})

