let vitorias = 85
let derrotas = 15

function DeterminarNivel(vitorias) {
 if(vitorias < 10){
    return "Ferro"

 } else if(vitorias >= 11 && vitorias <= 20){
    return "Bronze"

 } else if ( vitorias >= 21 && vitorias <= 50){
    return "Prata"

 } else if(vitorias >= 51 && vitorias <= 80){
    return "Ouro"

 } else if (vitorias >= 81 && vitorias <= 90){
    return "Diamante"

 } else if (vitorias >= 91 && vitorias <= 100){
    return "Lendário"

 } else{
    return "IMORTAL"
 }
}

function CalcularSaldo(vitorias, derrotas){
    return vitorias - derrotas
}

let saldo = CalcularSaldo(vitorias,derrotas)
let nivel = DeterminarNivel(vitorias)

console.log(`O Herói tem saldo de ${saldo} está no nível de ${nivel}`)