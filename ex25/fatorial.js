export default class Fatorial {
    numero
    constructor(numero){
        this.numero=numero
    }
    calcular(){
        let num=1
        for(let i=1; i<=this.numero;i++){
            num*=i
        }
        return num
    }
}