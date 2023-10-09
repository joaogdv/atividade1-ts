"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function timeSpent(timeOnMobileYesterday, timeOnMobileToday) {
    return timeOnMobileToday > timeOnMobileYesterday;
}
function main() {
    var timeOnMobileYesterday = readline.questionInt("Digite o tempo que você gastou no celular ontem (em horas): ");
    var timeOnMobileToday = readline.questionInt("Digite o tempo que você gastou no celular hoje (em horas): ");
    var result = timeSpent(timeOnMobileYesterday, timeOnMobileToday);
    if (result) {
        console.log("Você gastou mais tempo no celular hoje do que ontem.");
    }
    else {
        console.log("Você gastou menos tempo no celular hoje do que ontem.");
    }
}
main();
