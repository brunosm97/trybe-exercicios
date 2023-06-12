// definindo o objeto
const character = {
    namee: 'Luke SkyWalker',
    age: '53',
    description: {
        specieName: 'Human',
        jedi: true,
    },
    homeWorld: {
        name: 'Tatooine',
        population: '200000',
    },
};

// desestruturando o objeto:
const { namee, age, homeWorld: { namee: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${namee}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};

const { a: naame, b: classAssigned, c: subject } = student;

console.log(naame); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
  
printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const newObject = {...user, ...jobInfos};
  
  // console.log(newObject);
  const { name: name, age: aage, nationality: nat, profession: prof, squad: squad, squadInitials: squadInit } = newObject;

  console.log(`Hi, my name is ${name}, I'm ${aage} years old and I'm ${nat}. I work as a ${prof} and my squad is ${squadInit}-${squad}.`);
  