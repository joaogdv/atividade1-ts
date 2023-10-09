import * as leitor from "readline-sync";
​
function displayAlertMessage(userName: string, timeOnMobile: number): void {
    console.log(`${userName} gastou ${timeOnMobile} horas no celular hoje.`);
}
​
function main(): void {
    let userName = leitor.question("Digite o nome do usuário: ");
    let timeOnMobile = leitor.questionInt("Digite o tempo que você gastou no celular (em horas): ");
​
    displayAlertMessage(userName, timeOnMobile);
}
​
main();
​