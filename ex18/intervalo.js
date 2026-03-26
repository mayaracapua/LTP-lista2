export default class Intervalo{
    inicio
    fim
    constructor(inicio, fim){
        this.inicio=inicio
        this.fim=fim
    }
    contem(numero){
        if(numero>=this.inicio && numero<=this.fim){
            return true
        }
        else{
            return false
        }
    }
}