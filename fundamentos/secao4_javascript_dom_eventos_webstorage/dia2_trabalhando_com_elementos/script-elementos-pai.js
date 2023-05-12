//Acesse o elemento where-are-you.
const where = document.getElementById('where-are-you');

//Acesse parent a partir de where-are-you e adicione uma color a ele.
const changeColor = where.parentElement;
changeColor.style.color = 'blue';

//Acesse o first-child-of-child e adicione um texto a ele.
document.getElementById('first-child-of-child').innerText = 'ooooi';

//Acesse o first-child a partir de parent
document.getElementById('parent').firstElementChild;

//Acesse o first-child a partir de where-are-you.
document.getElementById('where-are-you').previousElementSibling;

//Acesse o texto Attention! a partir de where-are-you.
document.getElementById('where-are-you').nextSibling;

//Acesse o third-child a partir de where-are-you.
document.getElementById('where-are-you').nextElementSibling;

//Acesse o third-child a partir de parent.
document.getElementById('parent').lastElementChild.previousElementSibling;
