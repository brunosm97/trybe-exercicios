let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

//mesma coisa só que escrita com for

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

/* Utilize o for/of para imprimir os elementos da lista names com o console.log(): */

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nomes of names) {
    console.log(nomes);
}


let dado1 = Math.ceil(Math.random() * 6);
console.log('resultado dado 1:', dado1);
let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log('resultado dado 2:', dado2);
}

