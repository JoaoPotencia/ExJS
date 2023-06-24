// criar referencias aos elementos da pagina
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();//evita o envio do formulario
    

    //lendo a entrada e transformando ela em maiscula.
    const entrada = String(frm.inRoman.value.toUpperCase());

      const nRomanos = { //lista com os valores romanos
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000
      };  
      
      let contador = 0;
  
      //Utilizado um for para percorrer o nRomanos
      for (let i = 0; i < entrada.length; i++) {
          let atual = nRomanos[entrada[i]];
      
          // verifica se o proximo numero romano e maior ou menor que o atual
          if (i + 1 < entrada.length) {
              let prox_valor = nRomanos[entrada[i + 1]];
      
              //verificar se prox_valor e maior que o atual
              if (prox_valor > atual) {
                  contador -= atual;//senão contador descrementa do atual
                  continue;
              }
          }
          
          contador += atual;
      }
  
      resp.innerText = `O valor em decimal é: ${contador}`;
 });
