export default class Temperatura {
    celsius
    constructor(celsius){
        this.celsius=celsius
    }
    converterParaFahrenheit(){
        return (this.celsius*1.8)+ 32 +'°F'
    }
    converterParaKelvin(){
        return this.celsius+273 + 'K'
    }
}