// script.js

document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const slideCount = carouselItems.length;
    let index = 0;
    const intervalTime = 4000; // Tempo em milissegundos entre as transições

    function showSlide(newIndex) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active'); // Remove a classe 'active' de todos os itens
            if (i === newIndex) {
                item.classList.add('active'); // Adiciona a classe 'active' ao item atual
            }
        });
    }

    function nextSlide() {
        index++;
        if (index >= slideCount) {
            index = 0; // Reinicia o índice para a primeira imagem
        }
        showSlide(index);
    }

    setInterval(nextSlide, intervalTime);

    // Inicializa a exibição
    showSlide(index);
});
