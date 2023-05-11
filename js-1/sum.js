function suma(numero) {
    let i = 0;
    let resultado = 0;
    while (i <= 5) {
        resultado = resultado + i;

        i = i + 1;
    }
    return resultado;
}

console.log(suma(5));
