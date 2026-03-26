import Produto from "./produto.js";

const num = new Produto("colar", 100)
console.log(`Preco com desconto: ${num.aplicarDesconto(20)}`)