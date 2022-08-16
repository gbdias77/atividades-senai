var caixadepecas = ["Pneu","Freio","Embreagem","Amortecedor","Correias","Faróis","Bateria","Rádio","Filtro"]
var nomepeca0 = prompt("nome");
var pesopeca0 = prompt("peso(em gramas)");

 
if (pesopeca0 < 100) {
console.log("Não é possível cadastrar peças com menos de 100 gramas");
} else {
    if (nomepeca0.length < 3) {
        console.log("Não é possível cadastrar peças com menos de 3 letras");
    } else {console.log("Peça, "+nomepeca0+",adicionada com sucesso");
caixadepecas.push(nomepeca0);
 }
}

var adicionarpeca = prompt("Deseja adicionar mais peças ?");

if (adicionarpeca = ["Não","não","n"]) {
    console.log("Peças na caixa:"+caixadepecas);   
} if (adicionarpeca = ["Sim","sim","s"]){
    console.log("Não é possível adicionar mais de 10 peças");
    console.log("Peças na caixa:"+caixadepecas);
}


