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

describe('testes da função mapString'), () => {

};

describe('testes da função encode'), () => {

};

describe('testes da função decode'), () => {

};

