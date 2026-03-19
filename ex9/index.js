import ContaBancaria from "./banco.js";

const conta = new ContaBancaria("Maya Capua");

conta.depositar(600);
conta.sacar(100);

console.log("Saldo: " + conta.saldo);