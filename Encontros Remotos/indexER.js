let caixa_de_pecas = []
var nome_da_peca = prompt("digite o nome da peça:");
var peso_da_peca = prompt("digite o peso da peça(gramas):)");

if(peso_da_peca < 100 ) { 
    console.log(" não é possível cadastrar peças abaixo de 100 gramas ");
 } else {     
if (nome_da_peca.length > 3) {
    console.log("A peça foi cadastrada com sucesso");
    caixa_de_pecas.push(nome_da_peca)
} else {
    console.log(" não é possível cadastrar peças com menos de 3 letras ");}
 } 

 console.log("Peças registradas:",caixa_de_pecas)
 var nova_peca = prompt("adicionar nova peça?")

 // começo de repetição// 1° repetição//

 if(nova_peca = "sim") {
    var nome_da_peca = prompt("digite o nome da peça:");
var peso_da_peca = prompt("digite o peso da peça(gramas):)");

if(peso_da_peca < 100 ) { 
    console.log(" não é possível cadastrar peças abaixo de 100 gramas ");
 } else {     
if (nome_da_peca.length > 3) {
    console.log("A peça foi cadastrada com sucesso");
    caixa_de_pecas.push(nome_da_peca)
} else {
    console.log(" não é possível cadastrar peças com menos de 3 letras ");}
 } 

 console.log("Peças registradas:",caixa_de_pecas)
 var nova_peca = prompt("adicionar nova peça?")

 if(nova_peca = "sim")  {
    
 }
// fim da repetição//
 } else { if(caixa_de_pecas.length <=10) {
    console.log(" peças adicionadas com sucesso ");
    console.log("Peças registradas:",caixa_de_pecas);   
} else {
    console.log("Não é possível registrar mais de 10 peças");     
}
 }