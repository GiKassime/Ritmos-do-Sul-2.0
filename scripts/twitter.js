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

let caminho_img_perfil = "/img/twitter/";
let caminho_img_tweet = "/img/twitter/historias/";
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
        document.getElementById('img-perfil').src = caminho_img_perfil + perfil.imagem;
        document.getElementById('banner-imagem').src = caminho_img_perfil + perfil.banner;
        document.getElementById('username').innerText = `@${perfil.username}`;
        document.getElementById('bio').innerHTML = perfil.bio;
    } else {
        document.getElementById('profile-main').innerHTML = '<p>Perfil não encontrado.</p>';
    }
}


const todosTweets = [
    {
        tweets: [
            { texto: "Elena nasceu em Santiago, Chile, em uma família de músicos folclóricos. Desde pequena, a música fazia parte de sua vida. 🎶✨", imagem: "historia_elena1.jpg",hora: "há 1h" },

            { texto: "Seu pai, um renomado músico local, era seu maior mentor e inspiração. Juntos, eles exploravam as tradições da música chilena. 👨‍👧🎵", imagem: "historia_elena2.jpg", hora: "há 6h" },

            { texto: "Aos 18 anos, Elena decidiu embarcar em uma nova aventura: um intercâmbio cultural em São Paulo, Brasil. 🇨🇱➡️🇧🇷", imagem: "historia_elena3.jpg", hora: "há 7h" },

            { texto: "Enfrentar desafios financeiros e de adaptação não foi fácil, mas a coragem e a curiosidade de Elena a mantiveram firme. 💪🌟", imagem: "historia_elena4.jpg", hora: "há 8h" },

            { texto: "Em São Paulo, Elena conheceu Pedro Silva, um músico de sertanejo que mudou sua visão sobre a música. 🤝🎸", imagem: "historia_elena5.jpg", hora: "há 9h" },

            { texto: "Juntos, começaram a unir a tradição chilena com o sertanejo brasileiro, criando uma fusão musical única. 🎼🌎", imagem: "historia_elena6.jpg", hora: "há 10h" },

            { texto: "A jornada de Elena foi marcada por novas experiências e descobertas que transformaram seu sonho em realidade. 🌟💫", imagem: "historia_elena7.jpg", hora: "há 11h" },

            { texto: "Hoje, Elena continua a explorar e compartilhar sua música com o mundo, mantendo viva a herança chilena e celebrando novas culturas. 🌍🎶", imagem: "show_banda.jpg", hora: "há 12h" }
        ]

    },
    {
        tweets: [
            { texto: "Mateo cresceu em Medellín, onde o trompete era essencial nas festas e celebrações locais. 🎺🎉", imagem: "historia_mateo1.jpg", hora: "há 1h" },

            { texto: "Como músico de rua, Mateo se apresentava em eventos locais, economizando cada peso para investir em seu sonho de carreira musical. 💼🎶", imagem: "historia_mateo2.jpg", hora: "há 3h" },

            { texto: "Determinado a seguir sua paixão, Mateo tomou a corajosa decisão de se mudar para São Paulo, Brasil. 🇨🇴➡️🇧🇷", imagem: "historia_mateo3.jpg", hora: "há 5h" },

            { texto: "A mudança para São Paulo foi um grande desafio. Mateo enfrentou dificuldades financeiras e a saudade de casa, mas sua paixão pela música nunca o deixou desistir. 💪🎶", imagem: "historia_mateo4.jpg", hora: "há 7h" },

            { texto: "Em São Paulo, Mateo encontrou uma oportunidade inesperada: unir seu trompete à música sertaneja de Pedro e Elena. 🎺🎸", imagem: "historia_mateo5.jpg", hora: "há 9h" },

            { texto: "A combinação de trompete com a música sertaneja trouxe uma nova dimensão ao trabalho deles, e Mateo finalmente começou a ver seu sonho ganhar vida. 🌟🎶", imagem: "historia_mateo6.jpg", hora: "há 10hrs" },

            { texto: "Mateo continuou a explorar novos sons e a colaborar com diferentes artistas, sempre buscando inovar e expandir seus horizontes musicais. 🌍🎷", imagem: "historia_mateo7.jpg", hora: "há 11hrs" },

            { texto: "Hoje, Mateo é um exemplo de como a determinação e a coragem podem abrir portas para oportunidades inesperadas. Ele continua a inspirar outros músicos com sua jornada. 🎺✨", imagem: "show_banda.jpg", hora: "há 12hrs" }
        ]
    },
    {
        tweets: [
            { texto: "Pedro cresceu em uma pequena fazenda em Uberlândia, onde a música sertaneja era a alma da comunidade. 🌾", imagem: "historia_pedro1.jpg", hora: "há 3h" },

            { texto: "Seu avô, um talentoso violeiro, foi sua principal influência, ensinando-o a tocar violão e a amar a música desde cedo. 🎸👴", imagem: "historia_pedro2.jpg", hora: "há 5h" },

            { texto: "Após a morte de seu avô, Pedro decidiu seguir seu sonho e se mudar para São Paulo, determinado a fazer a música sertaneja alcançar novos públicos. 🌆🎵", imagem: "historia_pedro3.jpg", hora: "há 7h" },

            { texto: "Em São Paulo, Pedro enfrentou muitos desafios, trabalhando em diversos empregos para se sustentar, mas nunca deixando sua paixão pela música morrer. 💼🎤", imagem: "historia_pedro4.jpg", hora: "há 9h" },

            { texto: "Ele se apresentava em pequenos bares e eventos culturais, sempre buscando uma oportunidade para mostrar seu talento e amor pela música sertaneja. 🎶🍻", imagem: "historia_pedro5.jpg", hora: "há 9h" },

            { texto: "O encontro com Elena Reyes foi um ponto de virada. A colaboração intercultural entre eles trouxe uma nova dimensão ao seu trabalho musical. 🎺🎸", imagem: "historia_pedro6.jpg", hora: "há 9h" },

            { texto: "Finalmente, o sonho de Pedro começou a se concretizar: levar o sertanejo além das fronteiras, misturando-o com outros ritmos e criando algo único. 🌍🎼", imagem: "historia_pedro7.jpg", hora: "há 9h" },

            { texto: "Hoje, Pedro é um exemplo de como a paixão e a persistência podem transformar sonhos em realidade. Sua música continua a inspirar e conectar pessoas de diferentes culturas. 🌟🎸", imagem: "show_banda.jpg", hora: "há 9h" }
        ]
    },
    {
        tweets: [
            { texto: "Valentina cresceu em Ciudad del Este, onde o violino fazia parte da rica tradição musical do Paraguai. 🎻🇵🇾", imagem: "historia_valentina1.jpg", hora: "há 2h" },

            { texto: "Após se formar, Valentina decidiu explorar novos horizontes e se mudou para São Paulo para participar de um workshop de música latino-americana. 🎓🌍", imagem: "historia_valentina2.jpg", hora: "há 4h" },

            { texto: "Em São Paulo, Valentina enfrentou dificuldades financeiras e a saudade de casa, mas nunca perdeu a conexão com sua música. 💔🎶", imagem: "historia_valentina3.jpg", hora: "há 6h" },

            { texto: "A colaboração com Pedro, Elena e Mateo foi uma oportunidade única para reinventar sua música e explorar novas possibilidades. 🎻🎸🎺", imagem: "historia_valentina4.jpg", hora: "há 8h" },

            { texto: "Valentina começou a misturar a tradição paraguaia com novos ritmos, criando algo inovador e emocionante. 🌟🎼", imagem: "historia_valentina5.jpg", hora: "há 8h" },

            { texto: "Seus esforços foram recompensados quando a música deles começou a ganhar reconhecimento, levando sua arte a públicos cada vez maiores. 🌍🎶", imagem: "historia_valentina6.jpg", hora: "há 8h" },

            { texto: "A jornada de Valentina é um testemunho de como a busca por novas experiências pode levar a realizações surpreendentes. 💪🎻", imagem: "historia_valentina7.jpg", hora: "há 8h" },

            { texto: "Hoje, Valentina continua a explorar e inovar, inspirando outros músicos a seguirem suas paixões, não importa os desafios. 🌟🎶", imagem: "show_banda.jpg", hora: "há 8h" }
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
                        <img class="img-usuario" src="${caminho_img_perfil + perfil.imagem}" alt="Perfil">
                    </div>
                    <div class="tweet-info">
                        <p class="tweet-name">${perfil.nome} <span>@${perfil.username}</span></p>
                        <p class="tweet-time">${tweet.hora}</p>
                    </div>
                </div>
                <p class="tweet-text">${tweet.texto}</p>
                ${caminho_img_tweet + tweet.imagem ? `<div class="tweet-image"><img src="${caminho_img_tweet + tweet.imagem}" alt="Imagem do Tweet"></div>` : ''}
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
