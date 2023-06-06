const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('casaco', 'roupas', 229.90, 1)).toEqual({
        name: 'casaco',
        quantity: 1,
        unit: 'roupas',
        price: 229.90,
      });
  });

  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'KG', 1.99)).toHaveProperty('quantity', 0);
  });

  it('Lança um erro quando não recebe parâmetros', () => {
      expect(() => createItem()).toThrow();
  });

  it('Lança um erro se o nome do item não é uma string', () => {
      expect(() => createItem(20, 'KG', 1.99, 20)).toThrow('O nome do item deve ser uma string');
  });

  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'KG', -1, 10)).toThrow('O preço do item deve ser maior que zero');
  });

  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'KG', 0, 10)).toThrow('O preço do item deve ser maior que zero');
  });
});