export default class Equacao {
    a 
    b
    c 
    constructor(a, b, c){
        this.a=a
        this.b=b
        this.c=c
    }
    calcularDelta(){
        return (this.b*this.b) - 4 * this.a * this.c
    }
}