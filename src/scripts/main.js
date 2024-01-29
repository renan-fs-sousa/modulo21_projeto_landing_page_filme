document.addEventListener('DOMContentLoaded', function() {
    const elenco = document.querySelectorAll('[data-elenco]');
    const btnElenco = document.getElementById('btnElenco');
    const destaqueSection = document.querySelector('.destaque__container');
    const alturaDestaque = destaqueSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaDestaque) {
            exibeBotaoAssistir();
        } else {
            
            ocultaBotaoAssistir();
        }
    })

    for (let i = 0; i < elenco.length; i++) {
        elenco[i].addEventListener('click', toggleElenco);
    }
})

function toggleElenco(elemento) {
    const classe = 'elenco__list--show';
    const idElenco = document.getElementById("elenco_completo");
    idElenco.classList.toggle(classe);

    if (btnElenco.innerHTML === "Mostrar elenco completo") {
        btnElenco.innerHTML = "Ocultar elenco completo";
    } else {
        btnElenco.innerHTML = "Mostrar elenco completo";
    }
}

function ocultaBotaoAssistir() {
    const header = document.getElementById("btnAssistir");
    header.classList.add('botao__assistir--show');
    header.classList.remove('botao__assistir--hidden');
}

function exibeBotaoAssistir() {
    const header = document.getElementById("btnAssistir");
    header.classList.add('botao__assistir--hidden');
    header.classList.remove('botao__assistir--show');
}