//Programar a una persona - algoritmo

let tarjeta1 = 8
let tarjeta2 = 2
let tarjeta3 = 1
let auxiliar = 0


if (tarjeta1 > tarjeta2) {
    auxiliar = tarjeta1
    tarjeta1 = tarjeta2
    tarjeta2 = auxiliar
}

if (tarjeta2 > tarjeta3) {
    auxiliar = tarjeta2
    tarjeta2 = tarjeta3
    tarjeta3 = auxiliar
}


if (tarjeta1 > tarjeta2) {
    auxiliar = tarjeta1
    tarjeta1 = tarjeta2
    tarjeta2 = auxiliar
}

console.log("Números ordenados:")
console.log(tarjeta1, tarjeta2, tarjeta3)