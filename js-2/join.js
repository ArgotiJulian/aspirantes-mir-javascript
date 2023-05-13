function fjoin(arreglo) {
    let cadena = "";
    for (let index = 0; index < arreglo.length; index++) {
        cadena = cadena + " " + arreglo[index];
    }
    return cadena

}

console.log(fjoin(["Ejercicio", "De", "Creacion", "Join", "con", "Funciones"])); // "Funcion de creacion Join con Funciones
console.log(fjoin(["Con", "Este", "Ejercicio", "Se", "Terminan", "Las", "Practicas", "de", "hoy"])) //"Con Ese Ejercicio Se Termina Las Practicas de hoy"
