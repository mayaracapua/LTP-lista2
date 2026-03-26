import Investimento from "./investimento.js";

const juros= new Investimento(1000, 0.10)
const anos=2
console.log(`Juros em ${anos} anos: ${juros.calcularJuros(anos)}`)