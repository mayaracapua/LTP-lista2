export default class Pessoa{
    nome 
    idade
    constructor(nome, idade){
        this.nome=nome
        this.idade=idade
    }
    idadeEmDias(){
        return this.idade * 365
    }
}