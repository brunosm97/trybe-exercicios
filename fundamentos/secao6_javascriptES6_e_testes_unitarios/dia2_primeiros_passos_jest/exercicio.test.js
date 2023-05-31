const {
    removeItem,
    myFizzBuzz,
    mapString,
    encode,
    decode,
} = require('./exercicio');

describe('testes da função removeItens', () => {

    test('verifica se retorna o novo array sem o item passado', () =>  {
        expect(removeItem([1,2,3,5,7], 2)).toEqual([1,3,5,7]);
    });

    it('verifica se não retorna o novo array', () => {
        expect(removeItem([1,2,3,5], 2)).not.toEqual([1,2,3,5]);
    });

    it('verifica se retorna o novo array se o item passado não existir no array', () => {
        expect(removeItem([2,3,4,5], 6)).toEqual([2,3,4,5]);
    })
});

describe('testes da função myFizzBuzz', () => {

    it('verifica se retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });

    it('verifica se retorna fizz', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
    });

    it('verifica se retorna buzz', () => {
        expect(myFizzBuzz(20)).toEqual('buzz');
    });

    it('verifica se retorna o próprio número caso ele não seja divisivel nem por 3 nem por 5', () => {
        expect(myFizzBuzz(4)).toEqual(4);
    });

    it('verifica se o parametro da função é número', () => {
        expect(myFizzBuzz('15')).toEqual(false);
    });
});

describe('Testa as funções encode e decode', () => {
    it('a função encode é definida', () => {
      expect(encode).toBeDefined();
    });
    it('encode é uma função', () => {
      expect(typeof encode).toEqual('function');
    });
    it('converte apenas a vogal "a" no número 1', () => {
      expect(encode('ana')).toEqual('1n1');
    });
    it('converte a vogal "e" no número 2', () => {
      expect(encode('ele')).toEqual('2l2');
    });
    it('converte a vogal "i" no número 3', () => {
      expect(encode('xixi')).toEqual('x3x3');
    });
    it('converte a vogal "o" no número 4', () => {
      expect(encode('ovo')).toEqual('4v4');
    });
    it('converte a vogal "u" no número 5', () => {
      expect(encode('nu')).toEqual('n5');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(encode('trybe').length).toEqual(5);
    });
  
    it('a função decode é definida', () => {
      expect(decode).toBeDefined();
    });
    it('decode é uma função', () => {
      expect(typeof decode).toEqual('function');
    });
    it('converte apenas o número 1 na vogal a', () => {
      expect(decode('1n1')).toEqual('ana');
    });
    it('converte apenas o número 2 na vogal e', () => {
      expect(decode('2l2')).toEqual('ele');
    });
    it('converte apenas o número 3 na vogal i', () => {
      expect(decode('x3x3')).toEqual('xixi');
    });
    it('converte apenas o número 4 na vogal o', () => {
      expect(decode('4v4')).toEqual('ovo');
    });
    it('converte apenas o número 5 na vogal u', () => {
      expect(decode('n5')).toEqual('nu');
    });
    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
      expect(decode('trybe').length).toEqual(5);
    });
  });

