import * as leitor from "readline-sync"

function main() {
    let adulto = leitor.questionInt("Insira a quantidade de adultos que existem na festa: ")
    let crianca = leitor.questionInt("Insira o valor de criancas que existem na festa")
    console.log("The total party size is:", calcula(adulto, crianca));
}

function calcula(adulto: number, crianca: number): number {
    return adulto + crianca 

}

main()