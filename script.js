var nombre = prompt('Como es tu nombre:');
console.log('Gracias '+ nombre);
alert('Gracias '+ nombre);

var valor1;
var valor2;
var suma;
var multiplicacion;
var divicion;
var modulo;
alert( 'Operaciones con dos numeros.' );
valor1 = parseInt( prompt( 'Primer valor.' ) );
valor2 = parseInt( prompt( 'Segundo valor.') );

suma = valor1 + valor2;
multiplicacion = valor1 * valor2;
division = valor1 / valor2;
modulo = valor1 % valor2;
iguales = valor1 == valor2;

alert( 'La suma es: '+ suma +'\n' +
       'La multiplicacion es: '+ multiplicacion +'\n' +
       'La division es: '+ division +'\n' +
       'La modulo es: '+ modulo +'\n' +
       '¿Iguales?: '+ iguales +'\n'
);
