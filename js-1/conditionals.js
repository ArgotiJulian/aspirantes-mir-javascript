function calcularColor(numcolor) {
    var color;
    if (numcolor === 1) {
        return (color = "Color Negro");
    }
    else if (numcolor === 2) {
        return (color = "Color Blanco");
    }
    else if (numcolor === 3) {
        return (color = "Color Azul");
    }
    else {
        return (color = "Color Verde");
    }
}

console.log(calcularColor(4));