export default class Numeros {
    a 
    b
    c 
    constructor(a, b, c){
        this.a=a
        this.b=b
        this.c=c
    }
    maior(){
        if(this.a>this.b && this.a>this.c){
            return this.a
        }
        if(this.b>this.a && this.b> this.c){
            return this.b        
        }
        if(this.c>this.a && this.c>this.b){
            return this.c
        }
    }
}