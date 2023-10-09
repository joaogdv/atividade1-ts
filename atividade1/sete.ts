import * as readline from "readline-sync";

function timeSpent(timeOnMobileYesterday: number, timeOnMobileToday: number): boolean {
    return timeOnMobileToday > timeOnMobileYesterday;
}

function main() {
    const timeOnMobileYesterday = readline.questionInt("Digite o tempo que você gastou no celular ontem (em horas): ");
    const timeOnMobileToday = readline.questionInt("Digite o tempo que você gastou no celular hoje (em horas): ");

    const result = timeSpent(timeOnMobileYesterday, timeOnMobileToday);

    if (result) {
        console.log("Você gastou mais tempo no celular hoje do que ontem.");
    } else {
        console.log("Você gastou menos tempo no celular hoje do que ontem.");
    }
}

main();
