//Ranking
let nivel0 = "Sem Classificação"
let nivel10 = "Ferro"
let nivel20 = "Bronze"
let nivel50 = "Prata "
let nivel80 = "Ouro "
let nivel90 = "Diamante "
let nivel100 = "Lendário "
let nivel101 = "Imortal "

somarPartidasJogadas()


function somarPartidasJogadas(partidasG, partidasP){
    return partidasG - partidasP;
}

let resultado = somarPartidasJogadas (70, 10)
    console.log(resultado)
let saldoVitorias = resultado

if(resultado <= 0){
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel0)
}

if(resultado >= 10){
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel10)
}

if(resultado >= 20){
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel20)
}

if(resultado >= 50){
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel50)
}

if(resultado >= 80){
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel80)
}

if(resultado >= 90){
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel90)
}

if(resultado >= 100){
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel100)
}

if(resultado >= 101){
    console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel101)
}


