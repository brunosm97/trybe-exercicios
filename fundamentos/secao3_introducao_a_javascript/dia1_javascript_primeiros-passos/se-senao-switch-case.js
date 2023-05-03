let num1 = 26;
let num2 = 30;
let num3 = 120;




/* 1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */


let adicao = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let modulo = num1 % num2;

console.log("A soma desses números é: " + adicao);
console.log("A subtração desses números é: " + subtracao);
console.log("A multiplicação desses números é: " + multiplicacao);
console.log("A divisão desses números é: " + divisao);
console.log("O módulo desses números é: " + modulo);

/* 2 - Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados. */

if (num1 > num2) {
    console.log("O maior número desses 2 é: " + num1);
}

else {
    console.log("O maior número desses 2 números é: " + num2);
}

/* 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados. */


if (num1 > num2 && num1 > num3) {
    console.log("O maior número desses 3 números é: " + num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log("O maior número desses 3 números é: " + num2);
}
else {
    console.log("O maior número desses 3 números é: " + num3);
}

/* 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo. */

if (num1 > 0) {
    console.log(num1 + " é um número positivo");
}

else if (num1 == 0) {
    console.log(num1 + " é zero");
}

else {
    console.log(num1 + " é um número negativo");
}

/* 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro. */

let triangulo = num1 + num2 + num3;

if (triangulo == 180 && num1 > 0 && num2 > 0 && num3 > 0) {
    console.log(true);
}

else {
    console.log(false);
}

/* 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let pecaXadrez = 'Torre';
let movimento = '';

switch (pecaXadrez.toLowerCase()) {
    case 'peao':
        movimento = 'duas casas pra frente'        
        break;

    case 'torre':
        movimento = 'anda na vertical ou horizontal'
        break;

    case 'cavalo':
        movimento = 'anda em L'
        break;

    case 'bispo':
        movimento = 'anda na diagonal o mapa todo'
        break;

    case 'rainha':
        movimento = 'anda em qualquer direção'
        break;

    case 'rei':
        movimento = 'anda uma casa para qualquer direção'
        break;

    default:
        movimento = 'peça invalida'
        break;
}

console.log(movimento);

/* 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras: */

let nota = -10;

if (nota < 0 || nota > 100) {
    console.log("Nota inválida");
}

else if (nota >= 90) {
    console.log("Nota A");
}

else if (nota >= 80) {
    console.log("Nota B");
}

else if (nota >= 70) {
    console.log("Nota C");
}

else if (nota >= 60) {
    console.log("Nota D");
}

else if (nota >= 50) {
    console.log("Nota E");
}

else {
    console.log("Nota F");
}

/* 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false. */

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

/* 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false. */

if (num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1) {
    console.log(true);
}
else {
    console.log(false);
}

/* 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos. */

let custo = 1;
let valorVenda = -10;


if (custo > 0 && valorVenda > 0) {

    let imposto = custo * 0.20;
    let custoTotal = custo + imposto;
    let lucro = valorVenda - custoTotal; 
    
    console.log(lucro * 1000);
}
else {
    console.log("Erro, valores menor que 0");
}  

/* Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido. */

let salario = 2500;
let salarioLiq;
let impostoRenda;
let salarioFinal;

if (salario <= 1556.94) {
    let aliquota8 = salario * 0.08;
    salarioLiq = salario - aliquota8;
}
else if (salario >= 1556.95 && salario <= 2594.92) {
    let aliquota9 = salario * 0.09;
    salarioLiq = salario - aliquota9;
}
else if (salario >= 2594.93 && salario <= 5189.82) {
    let aliquota11 = salario * 0.11;
    salarioLiq = salario - aliquota11;
}
else {
    salarioLiq = salario - 570.88;
}

console.log("Salário liquido é de: " + salarioLiq);


if (salarioLiq <= 1903.98) {
    salarioFinal = salarioLiq;
    console.log("Isento do imposto de renda.");
}
else if (salarioLiq >= 1903.99 && salarioLiq <= 2826.65) {
    let aliquota75 = salarioLiq * 0.075;
    impostoRenda = aliquota75 - 142.80;
    salarioFinal = salarioLiq - impostoRenda;
}
else if (salarioLiq >= 2826.66 && salarioLiq <= 3751.05) {
    let aliquota15 = salarioLiq * 0.15;
    impostoRenda = aliquota15 - 354.80;
    salarioFinal = salarioLiq - impostoRenda;
}
else if (salarioLiq >= 3751.06 && salarioLiq <= 4664.68) {
    let aliquota225 = salarioLiq * 0.225;
    impostoRenda = aliquota225 - 636.13;
    salarioFinal = salarioLiq - impostoRenda;
}
else {
    let aliquota275 = salarioLiq * 0.275;
    impostoRenda = aliquota275 - 636.13;
    salarioFinal = salarioLiq - impostoRenda;
}

console.log("Salário liquido já com imposto de Renda pago é de: " + salarioFinal);


