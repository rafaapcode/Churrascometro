// Carne 400gr por pessoa + 6 horas - 650gr
// Cerveja 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças vale por 0,5




let adultos = document.getElementById("adultos");

let criancas = document.getElementById("criancas");

let duracao = document.getElementById("duracao");

let result = document.getElementById("resultado");

function calcular(){
    
    let a = adultos.value;

    let c = criancas.value;

    let d = duracao.value;
    
    let quantidadeC = carne(d) * a + (carne(d) / 2 * c);
    let qtdcerveja = Cerveja(d) * a;
    let Bebidas = bebidas(d) * a + (bebidas(d) / 2 * c);

   result.innerHTML = ` <p>${quantidadeC / 1000} Kg de Carne.</p>`;
   result.innerHTML += ` <p>${Math.ceil(qtdcerveja / 355)} Latinhas (355 ml) de Cerveja.</p>`;
   result.innerHTML += ` <p>${Math.ceil(Bebidas / 2000)} Garrafas de refrigerante / água / sucos (2L).</p>`;

   result.style.display = "block";
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
    let bear = 1000;

    if(duracao >= 6){
        bear = 1500;
    }
    return bear;

}