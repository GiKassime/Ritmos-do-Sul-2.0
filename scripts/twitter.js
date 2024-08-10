const perfis = [
    {
        nome: "Elena Reyes",
        seguidores: "2.590.000",
        tweets: "2.123",
        seguindo: "2.123",
        imagem: "elenareyes_perfil.png",
        username: "elenareyess",
        bio:"🎶 Gaitista e Vocalista |  <a href='index.html' class='link'>Ritmos do Sul</a>🌟<br>🇨🇱 De Santiago para o mundo✨<br>Explorando novas culturas através da música<br>📍 São Paulo",
        banner: "elenareyes_banner.png"
    },
    {
        nome: "Mateo Rivera",
        seguidores: "1.950.354",
        tweets: "1.678",
        seguindo: "1.678",
        imagem: "mateorivera_perfil.jpeg",
        username: "riveramateoo",
        bio:`🎺 Trompetista e Vocalista |  <a href='index.html' class='link'>Ritmos do Sul</a><br>🇨🇴 De Medellín para o mundo<br>🎵 Apaixonado por criar novos sons<br>📍 São Paulo`,
        banner: "mateorivera_banner.png"
    },
    {
        nome: "Pedro Silva",
        seguidores: "4.897.565",
        tweets: "4.897",
        seguindo: "4.897",
        imagem: "pedrosilva_perfil.jpeg",
        username: "pedroosilvaa",
        bio:"🎸 Violonista e Vocalista | <a href='index.html' class='link'>Ritmos do Sul</a>🌎<br>🎵 Transformando tradições em novas sonoridades<br>🌟 Sonhador em São Paulo<br>📍 Uberlândia ➡️ São Paulo",
        banner: "pedrosilva_banner.png"
    },
    {
        nome: "Valentina López",
        seguidores: "3.612.334",
        tweets: "2.456",
        seguindo: "2.456",
        imagem: "valentinalopez_perfil.png",
        username: "v.lopez",
        bio: "🎻 Violinista e Vocalista | <a href='index.html' class='link'>Ritmos do Sul</a> 🌟<br>🇵🇾 De Ciudad del Este explorando o mundo<br>🎶 Em busca de novas experiências musicais<br>📍 São Paulo",
        banner: "valentinalopez_banner.png"
    }
];

let caminho_img = "/img/twitter/";
// Carrega os tweets quando a página do twitter for aberta
if (window.location.pathname.endsWith('twitter.html')) {
    window.onload = () => {
        carregarPerfil();
        carregarTweets();
    };
}
function SelecionarPerfil(index) {
    // Dados dos perfis
    localStorage.setItem('perfilIndex', index);
    window.location.href = 'twitter.html';
}


function carregarPerfil() {
    const index = localStorage.getItem('perfilIndex');
    if (index !== null && !isNaN(index) && index >= 0 && index < perfis.length) {
        const perfil = perfis[index];

        document.getElementById('nome-usuario').innerText = perfil.nome;
        document.getElementById('seguidores').innerText = perfil.seguidores;
        document.getElementById('tweets').innerText = perfil.tweets;
        document.getElementById('seguindo').innerText = perfil.seguindo;
        document.getElementById('img-perfil').src = caminho_img + perfil.imagem;
        document.getElementById('banner-imagem').src = caminho_img + perfil.banner;
        document.getElementById('username').innerText = `@${perfil.username}`;
        document.getElementById('bio').innerHTML = perfil.bio;
    } else {
        document.getElementById('profile-main').innerHTML = '<p>Perfil não encontrado.</p>';
    }
}


const todosTweets = [
    {
        tweets: [
            { texto: "Adorando a nova música que estamos preparando! #Novidades", imagem: "elenareyes_perfil.png",hora: "há 1h" },
            { texto: "Preparando algo especial para o próximo show! Fiquem ligados.", imagem: "elenareyes_perfil.png", hora: "há 6h" },
            { texto: "Relembrando o último show, que energia! #Saudades", imagem: "path/to/tweet_image3.jpg", hora: "há 8h" }
        ]
    },
    {
        tweets: [
            { texto: "Amo o que faço, e o próximo show promete ser épico!", imagem: "path/to/tweet_image4.jpg", hora: "há 1h" },
            { texto: "Ensaiando novos riffs, mal posso esperar para mostrar para vocês.", imagem: "", hora: "há 3h" },
            { texto: "Acompanhe nossa jornada! #Música #Festa", imagem: "path/to/tweet_image5.jpg", hora: "há 5h" },
            { texto: "Tive uma ideia incrível para a próxima música!", imagem: "", hora: "há 7h" }
        ]
    },
    {
        tweets: [
            { texto: "Nosso último álbum está disponível! Não perca.", imagem: "path/to/tweet_image6.jpg", hora: "há 3h" },
            { texto: "A energia do show de ontem foi inacreditável!", imagem: "path/to/tweet_image7.jpg", hora: "há 5h" },
            { texto: "Estamos trabalhando duro para o próximo grande projeto.", imagem: "", hora: "há 7h" },
            { texto: "Obrigado a todos os fãs pelo apoio constante!", imagem: "", hora: "há 9h" }
        ]
    },
    {
        tweets: [
            { texto: "Mal posso esperar para o próximo show!", imagem: "path/to/tweet_image8.jpg", hora: "há 2h" },
            { texto: "Hoje foi dia de gravação. A música está ficando fantástica.", imagem: "", hora: "há 4h" },
            { texto: "Obrigado pelo carinho de todos. Vocês são incríveis!", imagem: "path/to/tweet_image9.jpg", hora: "há 6h" },
            { texto: "Trabalhando em novas músicas. Fiquem ligados!", imagem: "path/to/tweet_image10.jpg", hora: "há 8h" }
        ]
    }
];




function carregarTweets() {
    const index = localStorage.getItem('perfilIndex');
    if (index !== null && !isNaN(index) && index >= 0 && index < todosTweets.length) {
        const perfil = perfis[index];
        const tweets = todosTweets[index].tweets;
        const tweetSection = document.querySelector('.tweets');
        tweetSection.innerHTML = '<h2>Tweets</h2>';  // Reseta a seção de tweets

        tweets.forEach(tweet => {
            // Cria um novo div para o tweet
            const tweetClone = document.createElement('div');
            tweetClone.classList.add('tweet');

            // Adiciona o conteúdo do tweet
            tweetClone.innerHTML = `
                <div class="tweet-header">
                    <div class="tweet-profile-picture">
                        <img class="img-usuario" src="${caminho_img + perfil.imagem}" alt="Perfil">
                    </div>
                    <div class="tweet-info">
                        <p class="tweet-name">${perfil.nome} <span>@${perfil.username}</span></p>
                        <p class="tweet-time">${tweet.hora}</p>
                    </div>
                </div>
                <p class="tweet-text">${tweet.texto}</p>
                ${caminho_img + tweet.imagem ? `<div class="tweet-image"><img src="${caminho_img + tweet.imagem}" alt="Imagem do Tweet"></div>` : ''}
            `;

            // Adiciona o tweet 
            tweetSection.appendChild(tweetClone);
        });
    } else {
        document.querySelector('.tweets').innerHTML = '<p>Perfil não encontrado.</p>';
    }
}





// Função para abrir o modal
function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imgSrc;
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Adiciona eventos de clique para a imagem de perfil e o banner
document.getElementById('img-perfil').addEventListener('click', function() {
    openModal(this.src);
});

document.getElementById('banner-imagem').addEventListener('click', function() {
    openModal(this.src);
});

// Adiciona evento de clique para o botão de fechamento
document.querySelector('.close').addEventListener('click', closeModal);

// Fecha o modal se o usuário clicar fora da imagem
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('imageModal')) {
        closeModal();
    }
});
