const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort();
console.log(inventory); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

const inventory2 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory2); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const inventory3 = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// troca a operação para b - a
inventory.sort((a, b) => b - a);
console.log(inventory3); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((person1, person2) => person1.age - person2.age);

console.log(people);