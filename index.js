/**
 * suma de 2 numeros
 * @example
 * n1 = 1 , n2 = 1 resultado = 2 
 * @param {*} n1 primer numero que recibe la suma
 * @param {*} n2 segundo numero que recibe la sume
 */

const suma = (n1, n2) => {
    return n1 + n2;
}

/**
 * resta de 2 numeros
 * @example
 * n1 = 1 , n2 = 1 resultado = 0 
 * @param {*} n1 primer numero que recibe la suma
 * @param {*} n2 segundo numero que recibe la sume
 */

const resta = (n1, n2) => {
    return n1 - n2;
}

/**
 * multiplicacion de 2 numeros
 * @example
 * n1 = 1 , n2 = 1 resultado = 1 
 * @param {*} n1 primer numero que recibe la suma
 * @param {*} n2 segundo numero que recibe la sume
 */
const multiplicacion = (n1, n2) => {
    return n1 + n2;
}

/**
 * divicion de 2 numeros
 * @example
 * n1 = 1 , n2 = 1 resultado = 1 
 * @param {*} n1 primer numero que recibe la suma
 * @param {*} n2 segundo numero que recibe la sume
 */
const divicion = (n1, n2) => {
    return n1 / n2;
}

//Exportando los modulos
module.exports = {
    suma,
    resta,
    multiplicacion,
    divicion
}