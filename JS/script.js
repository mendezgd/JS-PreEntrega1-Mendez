/* Declaración de precios, iva, variables y total*/
let ak = 2500
let m4a1 = 3100
let desert = 700
let awp = 4700
const iva = 1.21
let opcion = 0
let total = 0
let totalIva = 0

/* declaracion de función, se reutiliza en todos los case  */
function multi(parcial, impuesto) {
    totalIva = total * iva;
}

/* Usuario ingresa su nombre y edad, en caso de ser menor, no podrá comprar un arma */
let nombreUsuario = prompt("ingrese su nombre");
alert("Bienvenido" + " " + nombreUsuario);
let edadUsuario = parseInt(prompt("ingrese su edad"));
if (edadUsuario < 18) {
    alert("Usted no puede comprar un arma: es menor de edad");
} else {
    /* Primero mostrará el menú, luego se puede ir agregando y va a ir sumando los elementos, se puede salir con opción 5 (corta bucle) o finalizando la compra (muestra total), si el carrito está vacio, vuelve automaticamente al menú (opción 6, sin agregar productos) */
    do {
        opcion = prompt("Selecciona un arma para agregar, iva no incluido. \n1- Ak-47: $2500 \n2- M4A1: $3100 \n3- Desert Eagle: $700 \n4- AWP: $4700 \n5- Salir \n6- Finalizar compra");
        switch (opcion) {
            case "1":
                alert("Seleccionaste Ak-47");
                total += ak;
                multi();
                alert("lleva gastados un total de: $" + totalIva + " con iva incluido");
                break;
            case "2":
                alert("Seleccionaste M4A1");
                total += m4a1;
                multi();
                alert("lleva gastados un total de: $" + totalIva + " con iva incluido");
                break;
            case "3":
                alert("Seleccionaste Desert Eagle");
                total += desert;
                multi();
                alert("lleva gastados un total de: $" + totalIva + " con iva incluido");
                break;
            case "4":
                alert("Seleccionaste AWP");
                total += awp;
                multi();
                alert("lleva gastados un total de: $" + totalIva + " con iva incluido");
                break;
            case "5":
                alert("gracias vuelvan pronto");
                break;
            case "6":
                if (total == 0) {
                    alert("tu carrito esta vacio");
                } else {
                    opcion = prompt("está seguro que desea finalizar esta compra \n-Si \n-No");
                    multi();
                    alert("deberás abonar un total de: $" + totalIva + " con iva incluido")
                }
                break;
            default:
                alert("el dato que ingresaste no es válido");
                break;
        }
    } while (opcion != "5" && opcion != "si");
}

