let numbers = [4, 8, 2, 20, 70, 8, 100, 2, 36, 28];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (let values of numbers) {
    console.log(values);
}

//Some todos os valores contidos no array e imprima o resultado.
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log("A soma desses números é: " + soma);

/* Calcule e imprima a média aritmética dos valores contidos no array.

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos. */

let media = 0;
media = soma / numbers.length;

console.log("A média aritmética dos valores contidos no array é: " + media);

/* Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”. */

if (media > 20) {
    console.log("O valor da média aritmética é maior que 20");
}

else {
    console.log("O valor da média aritmética é menor ou igual a 20");
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let maiorValor = 0;


for (let index = 0; index < numbers.length; index += 1) {
    if (maiorValor < numbers[index]) {
        maiorValor = numbers[index];
    }
}

console.log("O maior número é: " + maiorValor);

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”. */

let contaImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == 1) {
        contaImpar += 1;
    }
}

if (contaImpar == 0) {
     console.log("Nenhum valor ímpar encontrado.");
}
else {
    console.log("Existem " + contaImpar + " números ímpares neste array." );
}

/* Utilizando for, descubra o menor valor contido no array e imprima-o. */

let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
if (menorValor > numbers[index]) {  
        menorValor = numbers[index];
    }
}

console.log("O menor valor deste array é: " + menorValor);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let arrayOrder = [];

for (let index = 0; index < 25; index += 1) {
   arrayOrder[index] = index + 1; 
}

console.log(arrayOrder);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let arrayDivisao = [];

for (let index = 0; index < arrayOrder.length; index++) {
    arrayDivisao[index] = arrayOrder[index] / 2;
}

 console.log(arrayDivisao);