const quantidade_de_alunos = prompt( "Digite a quantidade de alunos" );

for ( var numero_alunos = 0; numero_alunos < quantidade_de_alunos ; numero_alunos++ ) {
console.log(numero_alunos);

} if (numero_alunos == 0) {
    console.log("A quantidade de alunos é zero")
} if (numero_alunos%2 == 0 && numero_alunos!=0){
    console.log("A quantidade de alunos é "+ numero_alunos + " que é um número par")
} else if (numero_alunos!= 0){
    console.log("A quantidade de alunos é "+ numero_alunos + " que é um número ímpar")  
}




