class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
  


atacar(){
    let ataque

    switch(this.type) {
        case "Mago":
        ataque = "Magia";
        break;

        case "Guerreiro":
        ataque = "Espada"
        break

        case "Monge":
        ataque = " Artes Marciais"
        break

        case "Ninja":
        ataque = "Shuriken"
        break
    }

    console.log(`O ${this.type} atacou usando ${ataque}`)
}
}

const heroi1 = new Hero("Júlia", 19, "Guerreiro")
const hero2 = new Hero("Felipe", 35, "Mago")
const hero3 = new Hero("Larissa", 43, "Ninja")
const hero4 = new Hero("Matteo", 1, "Monge")

heroi1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()