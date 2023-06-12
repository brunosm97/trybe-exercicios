// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'manga', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'açucar', 'paçoca'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));