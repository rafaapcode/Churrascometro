// Carne 400gr por pessoa + 6 horas - 650gr
// Cerveja 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças vale por 0,5



let adultos = document.getElementById("adultos");

let criancas = document.getElementById("criancas");

let duracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    
    let a = adultos.value;

    let c = criancas.value;

    let d = duracao.value;
    
    let quantidadeC = carne(d) * a + (carne(d) / 2 * c);
    let qtdcerveja = Cerveja(d) * a;
    let Bebidas = bebidas(d) * a + (bebidas(d) / 2 * c);

    console.log(quantidadeC);
}

function carne(duracao){
    let Carne = 400;

    if(duracao >= 6){
        Carne = 650;
    }
    return Carne;

}

function Cerveja(duracao){
    let cerveja = 1200;

    if(duracao >= 6){
        cerveja = 2000;
    }
    return cerveja;

}

function bebidas(duracao){
    let b = 1000;

    if(duracao >= 6){
        b = 1500;
    }
    return b;

}