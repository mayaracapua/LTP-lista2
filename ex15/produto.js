export default class Produto {
    nome 
    preco
    constructor(nome, preco){
        this.nome=nome 
        this.preco=preco 
    }
    aplicarDesconto(percentual){
        return this.preco-(this.preco * (percentual / 100))
    }
}