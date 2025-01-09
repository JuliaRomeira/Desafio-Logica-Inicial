let nome = "Gerwald"
let experienciaXp = 7500

if (experienciaXp < 1.000) {
    console.log("Ferro")

} else if (experienciaXp >= 1001 && experienciaXp <= 2000) {
    console.log("Bronze")

} else if (experienciaXp >= 2001 && experienciaXp <= 5000) {
    console.log("Prata")

} else if (experienciaXp >= 5001 && experienciaXp <= 7000) {
    console.log("Ouro")

} else if (experienciaXp >= 7001 && experienciaXp <= 8000) {
    console.log("Platina")

} else if (experienciaXp >= 8001 && experienciaXp <= 9000) {
    console.log("Ascendente")

} else if (experienciaXp >= 9001 && experienciaXp <= 10000) {
    console.log("Imortal")

} else {
    console.log("Seu XP é Radiante")
}

console.log("O Herói " + nome + " está no nivel " + experienciaXp) 