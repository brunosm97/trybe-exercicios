const geraEmail = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().replaceAll(' ', '_');
    return `${email}@trybe.com`;
};

const newEmployees = () => {
    const employees = {
      id1: geraEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: geraEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: geraEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const sorteiaNumero = () => Math.floor(Math.random() * 5) + 1;

  const result = (num, sorteiaNumero) => {
    const numSorteado = sorteiaNumero();
    if (num === numSorteado) {
        return `O seu número foi: ${num}
         e o número sorteado foi ${numSorteado}.
         Parabéns, você ganhou!`;
    }
    return `O seu número foi: ${num}
    e o número sorteado foi ${numSorteado}.
    Tente novamente.`
  };

  console.log(result(3, sorteiaNumero));
