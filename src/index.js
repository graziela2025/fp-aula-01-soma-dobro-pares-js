// Arquivo de exemplo para executar as funções definidas no math.js

import * as math from './math.js';

const numeros = [1, 2, 3, 7, 14, 8, 5]; // escolha os números que desejar
console.log('Soma usando a abordagem funcional:', math.somaDobroNumerosParesFuncional(numeros))
console.log('Soma usando a abordagem estrutural (procedural):', math.somaDobroNumerosParesProcedural(numeros))
