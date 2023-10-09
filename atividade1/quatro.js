"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function main() {
    var salarioBruto;
    var salarioINSS;
    var salarioIRRF;
    var salarioLiquido;
    salarioBruto = leitor.questionFloat("Insira o valor do salario bruto: ");
    salarioINSS = INSS(salarioBruto);
    salarioLiquido = IRRF(salarioINSS);
    console.log("Sal\u00E1rio Bruto: ".concat(salarioBruto));
    console.log("Desconto INSS: ".concat(salarioINSS - salarioBruto));
    console.log("Desconto IRRF: ".concat(salarioIRRF));
    console.log("Sal\u00E1rio L\u00EDquido: ".concat(salarioLiquido));
}
function INSS(salario) {
    if (salario <= 1320) {
        return salario * 0.925;
    }
    else if (salario > 1319 && salario <= 2149) {
        return salario * 0.905;
    }
    else if (salario > 2149 && salario <= 3089) {
        return salario * 0.875;
    }
    else if (salario > 3089 && salario <= 6199) {
        return salario * 0.825;
    }
    else {
        return salario * 0.775;
    }
}
function IRRF(salario) {
    if (salario <= 1903.98) {
        return salario * 0.075;
    }
    else if (salario > 1903.98 && salario <= 2826.65) {
        return salario * 0.15;
    }
    else if (salario > 2826.65 && salario <= 3751.05) {
        return salario * 0.225;
    }
    else if (salario > 3751.05 && salario <= 46)
        ;
}
