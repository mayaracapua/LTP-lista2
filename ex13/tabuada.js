export default class Tabuada {
    numero
    constructor(numero){
        this.numero=numero
    }
    mostrarTabuada(){
        for(let i = 1; i<=10; i++){
            console.log(`${i} X ${this.numero} = ${i*this.numero}`)
        }
    }
}