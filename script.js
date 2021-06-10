// Algoritmo de cajero

// * Pensar el algoritmo para crear un sistema de cajero bancario. Por el momento, solo permitirá realizar 1 acción y luego finalizará la sesión. La persona debe tener un usuario y contraseña para ingresar al sistema. Se le permitirá al usuario elegir entre realizar alguna de las siguientes acciones:
// - Ver saldo actual.
// - Retirar dinero.
// - Depositar dinero en su cuenta.
// - Cambiar su clave.

// * Cuando tengas armado el algoritmo… a codear!

// Pregunta: Cómo harías para que el usuario tuviera la posibilidad de realizar varias acciones? Es decir, luego de consultar su saldo, por ejemplo, que le vuelva a ofrecer el menú. (Pensarlo a nivel algoritmo)

// tenemos que tener declarado como constante la contraseña y usuari
// pedimos al usuario que ingrese, confirmamos el usuario.Si esta mal el usuario cerrar programa y esta bien pedir contraseña
// pedimos contraseña si esta bien continuamos sino salimos.
// validamos que los datos sean correctos, sino terminar el programa.
// mostramos por pantalla las cuatro opciones disponibles (1- Ver saldo actual 2- Retirar dinero 3-Depositar dinero en su cuenta 4-Cambiar clave)
// usuario elige una de ellas.
//ejecutar la accion seleccionada
// terminar proceso.

const usuario = "usuario";
let saldo = 1000; //Asumimos un saldo de $1000
let pass = 1234; //Asumimos contraseña numérica por ser cajero automático.
let usuarioIngresado = prompt("Ingrese su usuario");
if (usuarioIngresado !== usuario){
    alert("Usuario incorrecto, el programa se cerrará.");
}  else {
    let passIngresado = parseInt(prompt("Ingrese su contraseña"));
    if (passIngresado !== pass){
        alert("Contraseña incorrecta, el programa se cerrará.");
    } else {
        let opcion = parseInt(prompt("Elija una de las siguientes opciones:  1- Ver saldo actual  |  2- Retirar dinero | 3- Depositar dinero en su cuenta | 4- Cambiar su clave."));
        switch (opcion){
            case 1:
                alert("Tu saldo actual es de $" + saldo);
                break;
            case 2:
                let retiro = parseInt(prompt("Ingrese el monto a retirar"));
                if (retiro > saldo){
                    alert("El monto ingresado es mayor a su saldo actual. Su saldo actual es de $" + saldo );
                } else {
                    saldo = saldo - retiro;
                    alert("Usted retiró $"+ retiro + ". Su saldo actual es de $" + saldo );
                }
                break;
            case 3:
                let deposito = parseInt(prompt("Ingrese el monto a depositar"));
                saldo = saldo + deposito;
                alert("Usted ingresó $"+ deposito + ". Su nuevo saldo es de $" + saldo );
                break;
            case 4:
                let nuevoPass = parseInt(prompt("Ingrese su nueva clave"));
                let nuevoPassBis = parseInt(prompt("Reingrese su clave"));
                if (nuevoPass === nuevoPassBis){
                    pass = nuevoPass;
                    alert("Su nueva clave es: " + pass);
                } else {
                    alert("Las claves ingresadas no coinciden. El programa se cerrará"); 
                }
                break;
            default:
                alert("Opción no válida. El programa se cerrará.")
        }
    }
}

/* Ingresar un número del 1 al 10 y que indique si es mayor, menor o igual a 5. 
/Valores de prueba y su respuesta esperada:
 "hola" --> "El número ingresado es incorrecto!"
  0 --> "Debe ingresar un número del 1 al 10!"
  19 --> "Debe ingresar un número del 1 al 10!"
  2 --> "El número es menor a 5."
  8 --> "El número es mayor a 5."
  5 --> "El número es 5."
 
// */
// let numero = parseInt(prompt("Ingrese un número del 1 al 10"));
 
// if (isNaN(numero)){ // asignamos a la variable numero isnan
//     alert("El número ingresado es incorrecto!");
// } else if (numero> 10 && numero<1){
//     alert("Debe ingresar un número del 1 al 10!");
// } else{
//     if (numero<5){
//         alert("El número es menor a 5.");
//     } else if (numero>5){// cambiamos >= a >
//         alert("El número es mayor a 5.");
//     } else {
//         alert("El número es 5.");
//     }
// }


 
/* Solicitar al usuario que ingrese una palabra y que me muestra la última letra en mayúsculas.
 
*/
 
// let palabra = prompt(("Ingrese una palabra")); // cambiamos prompt por alert
 
// alert(palabra.charAt((palabra.length-1)).toUpperCase());// palabra estaba dejando afuera el toUpperCase

// Solicitar al usuario A que ingrese un monto a transferir a usuario B.
// Actualizar y mostrar el balance de ambas cuentas.
//  Valores de prueba y su respuesta esperada:
//  37 --> "El monto que está intentando transferir es mayor a su balance."
//  30 --> "El monto que solicitó transferir dejará su balance en 0."
//  25 --> "Se ha transferido el monto: 25 a usuario B. Su nuevo saldo es de: 5."
// */
 
// const balanceA = 30;
// const balanceB = 12;
 
// console.log("Su balance es: balanceA" ); 
 
// let monto = parseInt(prompt("Hola usuario A! Ingrese la cantidad a transferir a usuarioB")); // le agrego el parseInt para que no me tome como string el dato
 
// if (monto>balanceA){
//     alert("El monto que está intentando transferir es mayor a su balance.");
// } else if (balanceA === monto) {// agregue === antes estaba =
//     alert("El monto que solicitó transferir dejará su balance en 0.");
//     // balanceA = 0;no cumple ninguna funcion
//     // balanceB = 42;no cumple ninguna funcion

// } else{
//   // balanceA = balanceA - monto; borre esto por que son constantes  y no podemos cambiar el valor
//   // balanceB = balanceB - monto; borre esto por que son constantes  y no podemos cambiar el valor
//      let montoFinal = balanceA - monto;// asigne una variable montoFinal para poder calcular el monto que me quedaba despues del retiro
//      alert(`Se ha transferido el monto: ${monto} pesos a usuario B. Su nuevo saldo es ${montoFinal} pesos`);
// }
