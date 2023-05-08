let customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

customer1.lastName = 'Faria';

let customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

//adicionando novos pares através de uma função, criando variaveis para tal.

let newKey = 'naturalidade';
let naturalidade = 'Brasileiro';

function addProperty(object, key, value) {
    object[key] = value;    
}

addProperty(customer1, newKey, naturalidade)
console.log(customer1);


//adicionando chave full name através da concatenação de duas chaves

newKey = 'fullName';
let fullName = customer1.firstName + ' ' + customer1.lastName;

addProperty(customer1, newKey, fullName);
console.log(customer1);
