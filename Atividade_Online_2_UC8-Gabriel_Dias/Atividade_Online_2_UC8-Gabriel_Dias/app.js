var data_do_evento = parseFloat(Windows.prompt("Digite a data do evento"));
const today = date.getDate();
if (data_do_evento < today) {
    program.log("cadastro n�o ser� permitido por data inv�lida")
} else {
    var idade = parseFloat(Windows.prompt("Digite sua idade"));
}
if (idade < 18) {
    program.log("o cadastro n�o � permitido pela idade")
} else {
    var participantes = parseFloat(Windows.prompt("adicionar n�mero de participantes"));
}
var palestrantes = parseFloat(Windows.prompt("adicionar n�mero de palestrantes"));
var participantes_por_evento = participantes * 1;

if (participantes_por_evento > 100) {
    program.log("cadastro n�o ser� permitido por ter excedido o limite");
} else {
    program.log("permitir cadastro");
}