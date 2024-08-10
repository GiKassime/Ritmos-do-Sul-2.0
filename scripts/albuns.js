const albuns = [
    {
        nome: "Caminhos da vida",
        texto: "Cada faixa é uma jornada emocional, perfeita para quem valoriza a simplicidade e a profundidade dos sentimentos.",
        imagem: "album1.jpg"
    },
    {
        nome: "Noite de fiesta",
        texto: "Com ritmos contagiantes e letras divertidas, cada faixa é um convite para dançar, brindar e viver momentos inesquecíveis. Perfeito para quem adora se divertir e aproveitar a vida ao máximo.",
        imagem: "album2.jpg"
    },
    {
        nome: "Perdí mi Corazón",
        texto: "Com letras emocionantes e melodias tocantes, cada faixa mergulha no coração partido e na superação. Ideal para quem busca uma catarse emocional e se identifica com histórias de amor e perda.",
        imagem: "album3.jpg"
    }
];

let caminho_img = "/img/albuns/";
// Carrega os álbuns quando a página de discografia for aberta
if (window.location.pathname.endsWith('discografia.html')) {
    window.onload = () => {
        carregarAlbuns();
    };
}

function carregarAlbuns() {
    const albumSection = document.querySelector('.card-container');

    albuns.forEach(album => {
        // Cria um novo div para o album com a classe card
        const albumClone = document.createElement('div');
        albumClone.classList.add('card');

        // Adiciona o conteúdo do album
        albumClone.innerHTML = `
            <img src="${caminho_img + album.imagem}" class="card-image">
            <div class="card-content">
                <h3>${album.nome}</h3>
                <p>${album.texto}</p>
                <a href="#" class="card-button">OUÇA AGORA</a>
            </div>
        `;

        // Adiciona o album à seção de álbuns
        albumSection.appendChild(albumClone);
    });
}
