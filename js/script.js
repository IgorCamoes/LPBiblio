let header = document.querySelector('header');
let nomeBiblio = document.querySelector('header > div:nth-child(2) > div:first-child h4');
let fraseBiblio = document.querySelector('header > div:nth-child(2) > div:nth-child(2) h3');
let pessoaFrase = document.querySelector('header > div:nth-child(2) > div:nth-child(2) p');
let linkBiblio = document.querySelectorAll('header > div:first-child > h3');


Banner1 = () =>{
    nomeBiblio.innerHTML = 'Biblioteca Arialdo Assis Marques';
    fraseBiblio.innerHTML = '"Sempre me sinto em casa aqui, nunca falta um livro"';
    pessoaFrase.innerHTML = '— Fulano';
    header.style.backgroundImage = 'url("media/banner.jpg")';
    header.transition = '0.5s';
}

Banner2 = () =>{
    nomeBiblio.innerHTML = 'Biblioteca Martins Ciqueira';
    fraseBiblio.innerHTML = '"Biblioteca boa que fica perto de casa, meu sobrinho vai lá toda semana"';
    pessoaFrase.innerHTML = '— Cicrano';
    header.style.backgroundImage = 'url("media/banner2.jpg")';
    header.transition = '0.5s';
}

linkBiblio[0].onclick = Banner1;
linkBiblio[1].onclick = Banner2;