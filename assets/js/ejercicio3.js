
/* Se crea una variable para almacenar el valor y se inicializa en 0*/
let gradosCelsius = 0;

/* Se crean las constantes con el valor correspondiente a Kelvin y Fahrenheit*/
const gradosKelvin = 273.15;
const gradosFahrenheit = 32;

/* Se invita al usuario a ingresar un valor y se guarda en la variable creada anteriormente*/
gradosCelsius = +prompt("Ingrese grados en °C");

/* Dibuja titulo de ejercicio en la pantalla */
document.write('<h3 style="text-align:center;color: green;text-transform: uppercase;"> 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit  </h3>  </br>');

/* Realiza la transformacion de grados Celsius a Kelvin y lo dibuja en pantalla */
document.write(`<h3 style="text-align:center;color: orange"> ${gradosCelsius} grados celsius (°C) en grados Kelvin (K) son: ${ gradosCelsius + gradosKelvin } K </h3>  `);

/* Realiza la transformacion de grados Celsius a Fahrenheit y lo dibuja en pantalla */
document.write(`<h3 style="text-align:center;color: blue"> ${gradosCelsius} grados celsius (°C) en grados Fahrenheit (°F) son: ${ (gradosCelsius * 9/5) + gradosFahrenheit } °F </h3>  `);

