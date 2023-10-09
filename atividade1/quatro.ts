import * as leitor from "readline-sync"

function main() {
    let salarioBruto: Number
    let salarioINSS: Number 
    let salarioIRRF: Number
    let salarioLiquido: Number

    salarioBruto = leitor.questionFloat("Insira o valor do salario bruto: ")

    salarioINSS = INSS(salarioBruto)
    salarioLiquido = IRRF(salarioINSS)

    console.log(`Salário Bruto: ${salarioBruto}`)
    console.log(`Desconto INSS: ${salarioINSS - salarioBruto}`)
    console.log(`Desconto IRRF: ${salarioIRRF}`)
    console.log(`Salário Líquido: ${salarioLiquido}`)
}

function INSS(salario: Number): Number {
    if(salario <= 1320) {
        return salario*0.925
    } else if(salario > 1319 && salario <= 2149) {
        return salario*0.905
    } else if(salario > 2149 && salario <= 3089) {
        return salario*0.875
    } else if(salario > 3089 && salario <= 6199) {
        return salario*0.825
    } else {
        return salario*0.775
    }
}

function IRRF(salario: Number): Number {
    if(salario <= 2112) {
        return salario
    } else if(salario > 2112 && salario <= 2826) {
        return salario*0.925
    } else if(salario > 2826 && salario <= 3751) {
        return salario*0.85
    } else if(salario > 3751 && salario <= 4664 {
        return salario * 0.785
    
        