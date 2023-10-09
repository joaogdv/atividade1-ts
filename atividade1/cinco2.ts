import * as leitor from "readline-sync"
import { soma, subtracao, multiplicacao, divisao } from "./cinco1";
​
function main(): void {
    let num1 = leitor.questionInt("Digite o primeiro número: ");
    let num2 = leitor.questionInt("Digite o segundo número: ");
​
    console.log(`Soma: ${soma(num1, num2)}`);
    console.log(`Subtração: ${subtracao(num1, num2)}`);
    console.log(`Multiplicação: ${multiplicacao(num1, num2)}`);
    console.log(`Divisão: ${divisao(num1, num2)}`);
}
​
main();