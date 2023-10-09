"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var cinco1_1 = require("./cinco1");
function main() {
    var num1 = leitor.questionInt("Digite o primeiro número: ");
    var num2 = leitor.questionInt("Digite o segundo número: ");
    console.log("Soma: ".concat((0, cinco1_1.soma)(num1, num2)));
    console.log("Subtra\u00E7\u00E3o: ".concat((0, cinco1_1.subtracao)(num1, num2)));
    console.log("Multiplica\u00E7\u00E3o: ".concat((0, cinco1_1.multiplicacao)(num1, num2)));
    console.log("Divis\u00E3o: ".concat((0, cinco1_1.divisao)(num1, num2)));
}
main();
