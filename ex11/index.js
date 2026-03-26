export default class Operacoes {
    calcular(a,b,operacao){
       if(operacao == '+'){
        return a + b
       }
       if(operacao == '-'){
        return a - b 
       }
       if(operacao == '*'){
        return a * b 
       }
       if(operacao == '/'){
        return a / b 
       }
    }
}