function max(numeros) {
    maximo = 0;
    for (let index = 0; index < numeros.length; index++) {
        if (maximo < numeros[index]) {
            maximo = numeros[index];
        }
    }
    if (maximo === 0) {
        maximo = "undefined";
    }
    return maximo;
}

// escribe la función max acá

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined