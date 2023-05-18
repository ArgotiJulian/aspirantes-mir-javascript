let personas = {
    nombre: "Julian Argoti",
    edad: 28,
    ciudad: "Bogota",
    profesion: "Ingenieor Electronico",

}

console.log(personas)

function presentacion(datos) {
    let informacion = [];
    let llaves = Object.keys(datos);
    for (let i = 0; i < llaves.length; i++) {
        let llave = llaves[i];
        informacion[i] = llaves[i] + " " + datos[llave];

    }
    return informacion.join(" ");
}

let mensaje = presentacion(personas);

console.log(mensaje);

personas.hobbies = ["bailar", "correr", "jugar", "leer"];

console.log(personas.hobbies);

for (let index = 0; index < personas.hobbies.length; index++) {
    console.log(personas.hobbies[index]);
}