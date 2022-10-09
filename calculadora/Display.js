//interactua y muestra por pantalla con el usuario
class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }

    agregarNumero(numero){
        this.valorActual = numero;
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual; // metodo que me imprime mi valor por el html. Le digo que debe ser igual al valor que se ingrese desde el dislay
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}