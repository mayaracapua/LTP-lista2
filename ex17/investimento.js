export default class Investimento{
    capital
    taxa
    constructor(capital, taxa){
        this.capital=capital
        this.taxa=taxa
    }
    calcularJuros(anos){
        return this.capital*this.taxa*anos
    }
}