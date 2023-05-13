function sum(numeros) {
    let suma = 0;
    for (let index = 0; index < numeros.length; index++) {
        suma = suma + numeros[index];
    }
    return suma;
}


// escribe la función sum acá

console.log(sum([1, 2, 3]));// 6
console.log(sum([10, 8, 12, 5]));// 35
console.log(sum([])); // 0