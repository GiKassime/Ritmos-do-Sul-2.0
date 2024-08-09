const perfis = [
    {
        nome: "Elena Reyes",
        seguidores: "2.590.000",
        tweets: "2.123",
        seguindo: "2.123",
        imagem: "/img/twitter/elenareyes_perfil.png",
        username: "elenareyess",
        bio:" <p>Santiago ↔ São Paulo</p> <p> Onde a tradição chilena encontra o sertanejo</p> ",
        banner: " "
    },
    {
        nome: "Mateo Rivera",
        seguidores: "1.950.354",
        tweets: "1.678",
        seguindo: "1.678",
        imagem: "/img/twitter/mateorivera_perfil.png",
        username: "riveramateoo",
        bio:" ",
        banner: " "
    },
    {
        nome: "Pedro Silva",
        seguidores: "4.897.565",
        tweets: "4.897",
        seguindo: "4.897",
        imagem: "/img/twitter/pedrosilva_perfil.png",
        username: "pedroosilvaa",
        bio:" ",
        banner: " "
    },
    {
        nome: "Valentina López",
        seguidores: "3.612.334",
        tweets: "2.456",
        seguindo: "2.456",
        imagem: "/img/twitter/valentinalopez_perfil.png",
        username: "v.lopez",
        bio: " ",
        banner: " "
    }
];

let caminho_img = "/img/twitter/";
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
        document.getElementById('img-perfil').src = caminho + perfil.imagem;
        document.getElementById('banner-imagem').src = caminho + perfil.imagem;
        document.getElementById('username').innerText = perfil.username;
        document.getElementById('bio').innerText = perfil.bio;
    } else {
        document.getElementById('profile-section').innerHTML = '<p>Perfil não encontrado.</p>';
    }
}
function carregarTweets() {
    const tweetSection = document.querySelector('.tweets');
    tweetSection.innerHTML = '<h2>Tweets</h2>'; 
    tweets.forEach(tweet => {
        const tweetClone = document.querySelector('.tweet').cloneNode(true);
        tweetClone.style.display = 'block'; // Exibindo o tweet

        tweetClone.querySelector('.tweet-pic').src = perfil.imagem;
        tweetClone.querySelector('.tweet-username').innerText = tweet.username;
        tweetClone.querySelector('.tweet-text').innerText = tweet.texto;
        tweetClone.querySelector('.tweet-image-src').src = tweet.imagem;

        tweetSection.appendChild(tweetClone);
    });
}
if (window.location.pathname.endsWith('twitter.html')) {
    window.onload = carregarPerfil;
}
