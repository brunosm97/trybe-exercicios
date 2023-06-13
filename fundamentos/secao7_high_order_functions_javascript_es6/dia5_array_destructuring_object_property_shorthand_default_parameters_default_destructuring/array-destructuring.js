const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstNumber, secondNumber, thirdNumber] = primeNumbers;

sum(firstNumber, thirdNumber) // 54

// --------------------------------------------------------------------------------------------------------------------------------

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // gato agua arroz

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água

// --------------------------------------------------------------------------------------------------------------------------------

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

[,,, ...numerosPares] = numerosPares; // virgulas deletam um elemento do array, neste caso, como os numeros impares estão no inicio do array, dá pra utilizar as virgulas pra limpar só eles

console.log(numerosPares); // [6, 8, 10, 12];
