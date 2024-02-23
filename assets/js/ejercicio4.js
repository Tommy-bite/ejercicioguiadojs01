
/* Se crean las variables para almacenar los valores y se inicializa en 0*/
let cantDias = 0;

const ahno = 365;
const semana = 7;


/* Se invita al usuario a ingresar un valor y se guarda en la variable creada anteriormente*/
cantDias = +prompt("Ingrese cantidad de dias");

/* Dibuja titulo de ejercicio en la pantalla */
document.write('<h3 style="text-align:center;color: green;text-transform: uppercase;"> 4. Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día.  </h3>  </br>');

/* Realiza las operaciones  y lo dibuja en pantalla */
document.write(`<h2 style="text-align:center;color: blue"> El equivalente a ${ cantDias} dias son: </h2>  `);
document.write(`<h3 style="text-align:center;color: brown"> Cantidad de Años: ${Math.floor(cantDias / ahno)}  </h3>  `);
document.write(`<h3 style="text-align:center;color: brown"> Cantidad de Semanas: ${Math.floor((cantDias % ahno) / semana)}  </h3>  `);
document.write(`<h3 style="text-align:center;color: brown"> Cantidad de Dias: ${cantDias % 7} </h3>  `);

