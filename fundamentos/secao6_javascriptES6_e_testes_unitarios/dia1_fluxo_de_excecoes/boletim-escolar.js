const verificaNotas = (n1, n2, n3, n4) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number' || typeof n4 !== 'number') {
        throw new Error('todos os parametros precisam ser numeros.');
    }
}

const mediaNotas = (n1, n2, n3, n4) => {

    try {
        verificaNotas(n1, n2, n3, n4);
        return (n1 + n2 + n3 + n4) / 4;
    } catch (error) {
        return error.message;
    }
}
console.log(mediaNotas(5,2,'2',4));
