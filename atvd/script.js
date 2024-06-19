// Adiciona um evento de mudança ao elemento com o id 'color-filter'//
document.getElementById('color-filter').addEventListener('change', function() {
    // atribui o valor da propriedade value do elemento atual à variável filterClass.
    const filterClass = this.value; //váriavel constante//

    // Seleciona todas as imagens com a classe 'filter-image'
    const images = document.querySelectorAll('.filter-image');

    // Para cada imagem selecionada... método de array que executa uma função para cada elemento do array.
    images.forEach(img => {
        // Remove todas as classes existentes da imagem, exceto 'filter-image'
        img.className = 'filter-image'; // Reset the class

        // Se a classe selecionada não for 'default' (ou seja, uma opção de filtro foi selecionada)...
        if (filterClass !== 'default') {
            // Adiciona a classe selecionada à imagem
            img.classList.add(filterClass);
        }
    });
});

function aumentarFonte() {
    const elementos = document.querySelectorAll('body, body *');
    elementos.forEach(el => {
         const estilo = window.getComputedStyle(el, null).getPropertyValue('font-size');
        const tamanhoAtual = parseFloat(estilo);
        el.style.fontSize = (tamanhoAtual + 1) + 'px';
    });
}

function diminuirFonte() {
    const elementos = document.querySelectorAll('body, body *');
    elementos.forEach(el => {
        const estilo = window.getComputedStyle(el, null).getPropertyValue('font-size');
        const tamanhoAtual = parseFloat(estilo);
        el.style.fontSize = (tamanhoAtual - 1) + 'px';
    });
}


function alternarTema() {
    const body = document.body;
    const themeButton = document.getElementById('toggle-theme');

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeButton.textContent = '🌙';
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeButton.textContent = '☀️';
    }
}

// Configuração inicial do tema
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeButton = document.getElementById('toggle-theme');

    // Define o tema padrão como claro
    body.classList.add('light-theme');
    themeButton.textContent = '🌙';
});
