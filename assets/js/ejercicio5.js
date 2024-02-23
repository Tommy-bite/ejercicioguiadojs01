
/* Se crean las variables para almacenar los valores y invita al usuario a ingresar datos en el prompt*/
const num1 = +prompt("Ingrese el numero 1");
const num2 = +prompt("Ingrese el numero 2");
const num3 = +prompt("Ingrese el numero 3");
const num4 = +prompt("Ingrese el numero 4");
const num5 = +prompt("Ingrese el numero 5");


/* Dibuja titulo de ejercicio en la pantalla */
document.write('<h3 style="text-align:center;color: green;text-transform: uppercase;"> 5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación.  </h3>  </br>');

/* Realiza las operaciones  y lo dibuja en pantalla */
document.write(`<h2 style="text-align:center;color: brown"> La suma de todos los número da como resultado: ${ num1+num2+num3+num4+num5}  </h2>  `);
document.write(`<h2 style="text-align:center;color: brown"> El promedio de los los número da como resultado: ${ (num1+num2+num3+num4+num5) / 5}  </h2>  `);


