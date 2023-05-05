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

/* O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10. */

let guardaIndex = 1;

for (let index = 10; index > 0; index--) {
  guardaIndex = guardaIndex * index;
}

console.log(guardaIndex);

/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string 
abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente. */

let stringTeste = 'banana';
let stringInvertida = '';



for (let index = stringTeste.length -1; index >= 0; index--) {
  stringInvertida += stringTeste[index];
}
  console.log(stringInvertida);

  /* Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de
   caracteres de cada palavra.
Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no 
console o maior número primo entre 2 e 50. */

let palavras = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';

for (let index = 0; index < palavras.length; index++) {
  if (maiorPalavra.length < palavras[index].length) {
    maiorPalavra = palavras[index];
  }
}
console.log(maiorPalavra);

let menorPalavra = palavras[0];

for (let index = 0; index < palavras.length; index++) {
  if (palavras[index].length < menorPalavra.length) {
    menorPalavra = palavras[index];
  }
}
console.log(menorPalavra);

function primo(num) {
  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      return false;
    }
    
  }
  return true;
}

console.log(primo(9));

let maiorPrimo = 0;

for (let index = 2; index < 50; index++) {
    if (primo(index)) {
      if (maiorPrimo < index) {
        maiorPrimo = index;
      }
    }    
  }
  console.log(maiorPrimo);

