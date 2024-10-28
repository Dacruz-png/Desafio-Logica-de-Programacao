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
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    atacar(){
        console.log(`o ${this.type} atacou usando ${this.espada}`)
    }
}

class attack{
    constructor(magia, espada, marciais, shuriken){
        this.magia = magia
        this.espada = espada
        this.marciais = marciais
        this.shuriken = shuriken
    }


}

let heroName = new hero()

if(attack){
    this.mago === this.magia
    console.log("usou magia")
}