let data_do_evento = prompt("digite data:(dd/mm/yyyy)");
const today = "07/08/2022"
if (data_do_evento < today) {
    console.log("cadastro não será permitido por data inválida");
} else {}
    let idade = prompt("digite idade:");
if ( idade < 18) {
    console.log("o cadastro não é permitido pela idade");
} else {
    var participantes =  prompt("digite o número de participantes:");
} 
var palestrantes = prompt("digite o número de palestrantes:");

var participantes_por_evento = participantes * 1;

if (participantes_por_evento > 100) {
   console.log("cadastro não será permitido por ter excedido o limite");
} else {
    console.log("permitir cadastro");
}