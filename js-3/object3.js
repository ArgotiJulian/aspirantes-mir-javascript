let receta = {}

receta.nombre = "Sandwich";
receta.ingredientes = [];

receta.ingredientes = [
    { nombre: "pan", cantidad: 2 },
    { nombre: "queso", cantidad: 1 }];

console.log(receta.ingredientes[0].nombre)
let suma = 0;
for (let index = 0; index < receta.ingredientes.length; index++) {
    suma = receta.ingredientes[index].cantidad + suma;
}
console.log(suma);
