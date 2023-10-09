"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisao = exports.multiplicacao = exports.subtracao = exports.soma = void 0;
function soma(a, b) {
    return a + b;
}
exports.soma = soma;
function subtracao(a, b) {
    return a - b;
}
exports.subtracao = subtracao;
function multiplicacao(a, b) {
    return a * b;
}
exports.multiplicacao = multiplicacao;
function divisao(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
}
exports.divisao = divisao;
