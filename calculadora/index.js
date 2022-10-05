const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('Valor-actual');
const botonesNumeros = document.querySelector(' .numero ');
const botonesOperadores = document.querySelectorAll('.operador');

const calculadora = new Calculadora();

console.log(calculadora.sumar(2,3));
console.log(calculadora.restar(2,3));
console.log(calculadora.multiplicar(2,3));
console.log(calculadora.sumar(2,3));