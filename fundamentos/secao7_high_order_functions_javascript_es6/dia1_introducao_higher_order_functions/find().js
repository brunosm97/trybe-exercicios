const employees = [
    { id: 1, nome: 'Douglas Adams', idade: 20 },
    { id: 2, nome: 'H. G. Wells', idade: 18 },
    { id: 3, nome: 'Júlio Verne', idade: 57 },
    { id: 4, nome: 'Margaret Atwood', idade: 83 },
    { id: 5, nome: 'Edgar Allan Poe', idade: 19 },
];

console.log(employees.find((employee) => employee.id === 2).nome);

/*     employees.find((employee) => {
        if (employee.id === 2) {
            console.log(employee.name);
        }
    }); */

console.log(employees.find((employee) => employee.nome === 'Margaret Atwood').id);

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

console.log(idades.find((idade) => idade === 33));  // undefined


// Praticando 
const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

console.log(names.find((name) => name.length >= 5));

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

  console.log(musicas.find((musica) => musica.id === '31031685').title); // musicas.find((musica) => musica.id === '31031685').title;