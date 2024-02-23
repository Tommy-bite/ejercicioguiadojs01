
/* Se invita al usuario a ingresar 2 numeros en una ventana creada por el método prompt y se guardan en estas variables*/
const num1  = +prompt("Ingrese el número 1 ");
const num2 = +prompt("Ingrese el número 2");

/* Dibuja titulo de ejercicio en la pantalla */
document.write('<h3 style="text-align:center;color: green;text-transform: uppercase;"> 2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números, calcular lo siguiente:  </h3>  </br>');

/* Dibuja el resultado y realiza los ejercicios en un solo paso */
document.write(`<p style="text-align:center; font-size: 20px; color: green;" '> El resultado de la suma es: ${num1 + num2} </p>`);
document.write(`<p style="text-align:center; font-size: 20px; color: red;" '> El resultado de la resta es: ${num1 - num2} </p> `);
document.write(`<p style="text-align:center; font-size: 20px; color: orange;" '> El resultado de la multiplicación es: ${num1 * num2} </p>`);
document.write(`<p style="text-align:center; font-size: 20px; color: blue;" '> El resultado de la división es: ${num1 / num2} </p>`);
document.write(`<p style="text-align:center; font-size: 20px; color: blue;" '> El modulo es: ${num1 % num2} </p>`);