//Variáveis                     
//Operadores         
//Laços de repetição                
//Estruturas de decisões    ex: guerreiro, mago, monge, ninja      
//Funções                       
//Classes e Objetos   

//se mago -> no ataque exibir (usou magia)
//se guerreiro -> no ataque exibir (usou espada)
//se monge -> no ataque exibir (usou artes marciais)
//se ninja -> no ataque exibir (usou shuriken)    

class heroType{
    constructor(guerreiro, mago, monge, ninja){
        this.guerreiro = guerreiro
        this.mago = mago
        this.monge = monge
        this.ninja = ninja
    }
}


class hero{
    constructor(name, age, tipo){
        this.name = name
        this.age = age
        this.type = tipo
    }

    atacar(){
        console.log(`o ${this.guerreiro} atacou usando ${this.espada}`)
    }
}




let ataqueHero = new heroType(`atacou usando espada`, 
    `atacou usando magia`,
    `atacou usando marciais`,
    `atacou usando shuriken`,
    `atacou usando espada`)
console.log(ataqueHero)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class heroes{
    constructor(name, age, tipo, arma){
        this.name = name
        this.age = age
        this.type = tipo
        this.arma = arma
    }

    atacar(){
        console.log(`o ${this.type} atacou usando ${this.arma}`)
    }
}


let HeroHacker = new heroes("Marcos Holloway", 24,"Hacker", "DDOS")
HeroHacker.atacar()

let HeroGuerreiro = new heroes("Kratos", 30,"Guerreiro", "Espada")

let HeroMago = new heroes("Mestre dos Magos", 89,"Mago", "Magia")

let HeroMonge= new heroes("Dalai Lama", 70,"Monge", "Marciais")


let HeroNinja= new heroes("Jack Chan", 55,"Ninja", "Shuriken")

const ataquesDosHeroes = "" 

switch(ataquesDosHeroes){
    case HeroHacker:
        console.log(HeroHacker.atacar())
    break;
    case HeroGuerreiro:
        console.log(HeroGuerreiro.atacar())
    break;
    case HeroMago:
        console.log(HeroMago.atacar())
    break;
    case HeroMonge:
        console.log(HeroMonge.atacar())
    break;
    case HeroNinja:
        console.log(HeroNinja.atacar())
    break;
    default:

}