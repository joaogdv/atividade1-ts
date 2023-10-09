"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
function displayAlertMessage(userName, systemName) {
    console.log("".concat(userName, " usa o ").concat(systemName, "."));
}
function main() {
    var userName = leitor.question("Digite o nome do usuário: ");
    var systemName = leitor.question("Digite o nome do sistema operacional que você usa: ");
    displayAlertMessage(userName, systemName);
}
main();
