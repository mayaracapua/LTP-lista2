export default class Numero {
    valor
    constructor(valor){
        this.valor=valor
    }
    comparar(outroValor){
        if(this.valor > outroValor){
            return "maior"
        }
        if(this.valor < outroValor){
            return "menor"
        }
        if(this.valor == outroValor){
            return "igual"
        }
    }
}