function maxIndex(numeros) {
    maximo = 0;
    indice = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (maximo < numeros[index]) {
            maximo = numeros[index];
            indice = index;
        }
    }
    if (maximo === 0) {
        indice = -1;
    }
    return indice;
}

// escribe la función max acá

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1