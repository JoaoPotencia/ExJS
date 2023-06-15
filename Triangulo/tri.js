//criar referências ao elementos da pagina
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");


frm.addEventListener("submit",(e) =>{
    //evita o envio do formulario
    e.preventDefault();

    //obter os valores digitados
    const Lado1 = Number(frm.inLado1.value);
    const Lado2 = Number(frm.inLado2.value);
    const Lado3 = Number(frm.inLado3.value);

    if(Lado1 + Lado2 > Lado3 && Lado2 + Lado3 > Lado1 && Lado1 + Lado3 > Lado2){
        resp1.innerText = "Formou Triângulo \n";
        resp1.style.color = "purple";

        if(Lado1 == Lado2 && Lado2 == Lado3 ||Lado2 == Lado3 && Lado1 == Lado2 || Lado3 == Lado1 && Lado2 == Lado1 ){
            resp2.innerText = "Triângulo Equilátero !";
            resp2.style.color = "red";
        }
        else if(Lado1 == Lado2 || Lado1== Lado3 || Lado3 == Lado2){
            resp2.innerText = "Triângulo Isósceles!";
            resp2.style.color = "blue";
        }
        else{
            resp2.innerText = "Triângulo Escaleno!";
            resp2.style.color = "green";
        }
    }else{
        resp1.innerText = "Não formou triângulo!";
        resp2.innerText = ""
        resp1.style.color = "orange";
    }
    
})
