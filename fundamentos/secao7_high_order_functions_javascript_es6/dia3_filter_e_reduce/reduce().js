// estrutura completa do reduce
// array.reduce((acumulador, valorAtual, indexAtual, array) => { "código" }, valorInicial);

const valorItens = [1, 32, 44, 2, 3];

/* valorItens.reduce((acc, curr) => {
  console.log(`acumulador - acc:`, acc);
  console.log(`valorAtual - curr:`, curr);
  console.log(`a soma atual é`, acc + curr);

  return acc + curr;
}, 0); */

console.log(valorItens.reduce((acc, curr) => acc + curr, 0));

// deixando isso mais organizado:

const sumNumbers = (acc, curr) => acc + curr;

const totalSum = valorItens.reduce(sumNumbers, 30);

console.log(totalSum); //112   vai dar 82 o valor total + o valor inicial de 30

// --------------------------------------------------------------------------------

const numbers = [50, 85, -30, 3, 15];

/* console.log(numbers.reduce((maiorNum, numAtual) => {
    if (numAtual > maiorNum) {
        maiorNum = numAtual;
    }
    return maiorNum;
})); */

console.log(numbers.reduce((maiorNum, numAtual) => maiorNum > numAtual ? maiorNum : numAtual));

// -------------------------------------------------------------------------------------------------------

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

console.log(numbers2.reduce((acumulador, numPar) => numPar % 2 === 0 ? acumulador + numPar : acumulador));

console.log(numbers2.filter((num) => num % 2 === 0).reduce((acumulador, num) => acumulador + num));