window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    let windowHeight = window.innerHeight;

    // Adiciona a classe 'rolagem' quando o usuário rolar mais que a altura da janela
    header.classList.toggle('rolagem', window.scrollY > windowHeight);
});
