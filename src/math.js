/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){

    const somaDobroPares = numeros
        .filter(numero => numero % 2 === 0)  // Filtra os numeros pares
        .map(numero => numero * 2)           // Dobra os numeros filtrados
        .reduce((soma, numero) => soma + numero, 0); // Soma os valores
    console.log("A soma do dobro dos números pares é(funcional): " + somaDobroPares);
    return somaDobroPares;
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){

    let somaDobroPares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            somaDobroPares += numeros[i] * 2;
        }
    }
    console.log("A soma do dobro dos números pares é(procedural): " + somaDobroPares);
    return somaDobroPares;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
