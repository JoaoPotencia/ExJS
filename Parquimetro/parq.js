//cria referências ao elemento da pagina
const frm = document.querySelector("form");
const tempoDePermanencia = document.querySelector("h3");
const troco = document.querySelector("h4");

//Se o valor for inferior ao tempo mínimo, exiba a mensagem: “Valor Insuficiente”. 
//Valores: R$ 1,00 - 30 minutos
//R$ 1.75 - 60 minutos 
//R$3,00 - 120 minutos.
frm.addEventListener("submit",(e) => {
   
    //Evita o envio do formulario
    e.preventDefault()

    //Obtendo os valores digitados

    const valorMoedas = Number(frm.inMoeda.value);
    const valor_30m = valorMoedas - 1.00;
    const valor_60m = valorMoedas - 1.75;
    const valor_120m = valorMoedas - 3.00;

    if (valorMoedas < 1) 
    {
        tempoDePermanencia.innerText= "Valor insuficiente!"
        troco.innerText = "";
    } 
   
    else 
    {
        if ((valorMoedas >= 1) && (valorMoedas < 1.75)) 
        {
            
        tempoDePermanencia.innerText=`Valor Pago R$${valorMoedas.toFixed(2)}, Equivalente há 30 minutos`;
        troco.innerText=`Troco R$${valor_30m.toFixed(2)}`;
        
        }
        
        if (valorMoedas >= 1.75 && (valorMoedas < 3)) 
        {
            
        tempoDePermanencia.innerText=`Valor Pago R$${valorMoedas.toFixed(2)}, Equivalente há 60 minutos`;
        troco.innerText=`Troco R$${valor_60m.toFixed(2)}`;
        
        } 
        
        if (valorMoedas >= 3) 
        {
            
        tempoDePermanencia.innerText=`Valor Pago R$${valorMoedas.toFixed(2)}, Equivalente há 120 minutos`
        troco.innerText=`Troco R$${valor_120m.toFixed(2)}`;
            
        }  
    }
})