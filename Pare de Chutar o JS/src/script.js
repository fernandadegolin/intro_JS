// let nome = Number(prompt("Digite um numero?"));
// let n1 = 2
// let soma = nome + n1

// alert(`É um grande prazer ter você ${soma}`)


/* Testando o OPERADOR TERNARIO */
// let n1 = 1;
// let n2 = '1';
// let resultado = n1 === n2 ? 'LOGICO QUE NAO' : 'OPA é SIM';


/* Testanto os SELETORES */
// let p1 = document.getElementsByTagName('h1');
// document.write(`${p1.innerHTML} <=`)


/* Testando EVENTOS */

let a = document.getElementById('area');
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Gosto do seu clique!'
}

function entrar() {
    a.innerHTML = "Oi Sumido!"
    a.style.background = "#618C8C";
}

function sair() {
    a.innerHTML = "Fica vai ter bolo!"
    a.style.background = "#72A68E";
    a.style.color = "var(--paragraph)";
}

