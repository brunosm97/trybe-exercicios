
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift("Escovar os dentes")  //adiciona tarefa no inicio do array
console.log(tasksList);

// ['Escovar os dentes',  'Tomar café',  'Reunião',  'Brincar com o cachorro',  'Fazer exercícios da Trybe']

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 2, procura em qual indice o reunião está

let finalOfTaskRemove = tasksList.pop(tasksList);
let firstOfTaskRemove = tasksList.shift(tasksList);
console.log(tasksList);

// metodo .shift remove o primeiro elemento do array    |   metodo .pop remove o ultimo



// Para fixar

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Aulas');

console.log(menu); 

// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “Valor menor que 16”:

let fruits = [3, 4, 10];
let sum = 0;

for (let index = 0; index < fruits.length; index += 1) {
    sum += fruits[index];
}

if (sum > 15) {
    console.log(sum);
}
else {
    console.log("Array menor que 16");
}
