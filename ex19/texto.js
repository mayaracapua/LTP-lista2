export default class Texto {
    conteudo
    constructor(conteudo){
        this.conteudo=conteudo
    }
    repetir(vezes){
        for(let i = 0; i<vezes;i++){
            console.log(this.conteudo)
        }
    }
}