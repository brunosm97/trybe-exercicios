let saldo = 100;

function somaSaldo(valor) {
  return valor + saldo;
};

function subtraiSaldo(valor) {
  return saldo - valor;
};

function multiplicaSaldo(valor) {
  return valor * saldo;
};

function divideSaldo(valor) {
  return saldo / valor;
};

console.log(somaSaldo(300)); // 400
console.log(subtraiSaldo(50)); // 50
console.log(multiplicaSaldo(2)); // 200
console.log(divideSaldo(5)); // 20


function sacar(valor, saldo) {
  if (valor >= 1 && saldo >= 0) {
    if (valor <= saldo) {
      return "Saque realizado com sucesso. Novo saldo: R$ " + (saldo - valor) + ",00";
    } else {
      return "Saldo insuficiente. Seu saldo atual é: R$ " + saldo + ",00";
    }
  } else {
    return "Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.";
  }
}

console.log(sacar(2, 20)); // Saque realizado com sucesso. Novo saldo: R$ 18,00
console.log(sacar(2, -5)); // Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.
console.log(sacar(2, 0)); // Saldo insuficiente. Seu saldo atual é: R$ 0,00


let status = 'deslogado'; // o status padrão é deslogado

function logarDeslogar() { // aqui criamos uma função para verificar o status
  if (status === 'deslogado') { // se a pessoa usuária estiver deslogada, alteramos o status para logado
    status = 'logado';
  } else { // caso esteja logado, alteramos para deslogado
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status + ' no sistema TrybeBank'); // O usuário está deslogado no sistema TrybeBank

/* Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string. */

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adicionarCliente(novoCliente) {
  if (typeof novoCliente === 'string') {
    clientesTrybeBank.push(novoCliente);
    return "O cliente " + novoCliente + " foi adicionado ao array.";
  }
  else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}


//Refatorando a função excluiCliente
function validaCliente(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
  } else {
    return true;
  }
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
      return index;
    }
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = clienteIndex(cliente);
  if (index === false) {
    return 'Cliente não encontrada(o).'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
}

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]




