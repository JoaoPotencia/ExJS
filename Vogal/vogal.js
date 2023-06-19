// Obtém referência para os elementos do HTML
const frm = document.querySelector('form');
const entradaTexto = document.querySelector('inPalavra');
const preResultado = document.querySelector('pre');





frm.addEventListener("submit",(e) => {
    e.preventDefault(); // Impede o envio do formulário

    // Obtém o número digitado pelo usuário
    const palavra = String(frm.inPalavra.value);
    const tamanho = palavra.split(" ");

    //contadores Vogais
    let contA = 0;
    let contE = 0;
    let contI = 0;
    let contO = 0;
    let contU = 0;
    

    if(tamanho.length < 4){
        preResultado.innerText = "Digite uma palavra maior!!";
    }else{
        preResultado.innerText = "";
       for(var i = 0; i < palavra.length; i++){
          if(palavra[i] == "a" || palavra[i] == "A"){
            contA += 1;
          }else if(palavra[i] == "e" || palavra[i] == "E"){
            contE += 1;
          }else if(palavra[i] == "i" || palavra[i] == "I"){
            contI += 1;
          }else if(palavra[i] == "o" || palavra[i] == "O"){
            contO += 1;
          }else if(palavra[i] == "u" || palavra[i] == "U"){
            contU += 1;
          }
        }
        preResultado.innerText = `A palavra ${palavra} possui ${contA} vogais e ${contE} vogais e ${contI} vogais e ${contO} vogais e ${contU} vogais`;
    }

   

})