let myName = "Bruno Santos";
let birthCity = "Florianópolis";
let birthYear = 1997;

/* console.log(myName, birthCity, birthYear); */

let patientId = 50;
let isEnrolled = true;
let patientInfo = {
    firstName: 'Ana',
    lastName: 'Santos',
};
let patientEmail = 'ana@email.com';

    /* console.log(typeof isEnrolled); */ 
    
    let base = 5;
    let height = 8;
    let area = (base * height);
    let perimeter = (base + height) * 2;
    
    /* console.log(base); 
    console.log(height); 
    console.log(area); 
    console.log(perimeter); */

/* let nota = 59;

if (nota >= 80){
    console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
}

else if (nota >= 60 && nota < 80){
    console.log("Você está na nossa lista de espera.");
}

else {
    console.log("Infelizmente, você reprovou.");
} */

//operador AND = &&

let comida = 'pão na chapa';
let bebida = 'café';

if (bebida === 'café' && comida === 'pão na chapa') {
  console.log('Muito obrigado(a) pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

let conditionOne = true;
let conditionTwo = false;

console.log(conditionOne && conditionTwo);

let cenouras = true;
let leite = true;
let arroz = true;
let feijao = true;

let listaDeCompras = cenouras && leite && arroz && feijao;


// operador OR = ||

console.log(listaDeCompras);

let bebidaPrincipal =  'café';
let bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'café' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado(a) por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

let weekDay = 'sabado';

if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira'){
    console.log("Mais um dia de aprendizado na Trybe!");
}

else {
    console.log("Dia de descanso!");
}

