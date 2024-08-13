const albuns = [
    {
        nome: "Nos caminhos da vida",
        texto: "Cada faixa é uma jornada emocional, perfeita para quem valoriza a simplicidade e a profundidade dos sentimentos.",
        imagem: "album1.jpg",
        musica: "caminhosdavida.mp3",
        letra: `Nos caminhos da vida eu te encontrei<br>
E o destino nos uniu sem avisar<br>
Foi um brilho no olhar que me encantou<br>
E agora eu<br><br>

Te levo no coração sem ter razão<br>
A noite chega e eu só penso em nós<br>
A saudade aperta forte no peito<br>
E eu só quero ouvir sua voz<br><br>

Vem pra cá meu bem quero te amar<br>
Nosso amor é chama que não vai apagar<br>
Na balada ou no sertão quero te ter<br>
Nosso amor é infinito pode crer<br><br>

Nas modas sertanejas dançamos juntos<br>
A lua cheia ilumina nosso amor<br>
É um sentimento puro e profundo<br>
Que me faz querer você por onde for<br><br>

Vem pra cá meu bem quero te amar<br>
Nosso amor é chama que não vai apagar<br>
Na balada ou no sertão quero te ter<br>
Nosso amor é infinito pode crer<br><br>

Nossa vida é um poema em canção<br>
Cada verso é mais um dia de paixão<br>
Não vejo a hora de te ver sorrir<br>
Seu sorriso é o que me faz feliz`
    },
    {
        nome: "Noite de fiesta",
        texto: "Com ritmos contagiantes e letras divertidas, cada faixa é um convite para dançar, brindar e viver momentos inesquecíveis.",
        imagem: "album2.jpg",
        musica: "noitedefiesta.mp3",
        letra: `Ela chega na balada<br>
Copos cheios na mão<br>
Todo mundo animado<br>
Coração em explosão<br><br>

Ele dança no salão<br>
Pisca de longe pra ela<br>
O ritmo contagiante<br>
Noite vai ser daquelas<br><br>

Vamos beber até cair<br>
Na pista vamos sorrir<br>
Baila comigo mamá<br>
Hasta la fiesta acabar<br><br>

Os amigos tão chegando<br>
Mais tequila pra brindar<br>
A galera toda junta<br>
Noite para celebrar<br><br>

Ela sorri pra ele<br>
Num abraço aconchegante<br>
Dois corações latinam<br>
Nessa dança eletrizante<br><br>

Vamos beber até cair<br>
Na pista vamos sorrir<br>
Baila comigo mamá<br>
Hasta la fiesta acabar`
    },
    {
        nome: "Perdí mi Corazón",
        texto: "Com letras emocionantes e melodias tocantes, cada faixa mergulha no coração partido e na superação.",
        imagem: "album3.jpg",
        musica: "perdimicorazon.mp3",
        letra: `Noite fria sozinha estou<br>
O teu calor não me abraçou<br>
Memórias que não vão embora<br>
Saudades do teu amor<br><br>

Juraste amor mas foi mentira<br>
Te vi com outra alma vazia<br>
Chorei ao ver tua traição<br>
Rasgaste o meu coração<br><br>

Perdí mi corazón<br>
En la sombra de tu traición<br>
Chorei tanto por favor<br>
Devolve-me meu amor<br><br>

As estrelas não brilham mais<br>
Desde que tu disseste adeus<br>
Dói demais pensar em nós dois<br>
Sem ti fico sem paz<br><br>

No coração só há dor<br>
Teu aroma ainda está na flor<br>
Promessas no vento se vão<br>
Levaste meu último florão<br><br>

Perdí mi corazón<br>
En la sombra de tu traición<br>
Chorei tanto por favor<br>
Devolve-me meu amor`
    }
];

let caminho_img = "/img/albuns/";
let caminho_msc = "/musicas/";

// Carrega os álbuns quando a página de discografia for aberta
if (window.location.pathname.endsWith('discografia.html')) {
    window.onload = () => {
        carregarAlbuns();
    };
}

function carregarAlbuns() {
    const albumSection = document.querySelector('.card-container');

    albuns.forEach((album, index) => {
        const albumClone = document.createElement('div');
        albumClone.classList.add('card');
    
        albumClone.innerHTML = `
            <img src="${caminho_img + album.imagem}" class="card-image">
            <div class="card-content">
                <h3>${album.nome}</h3>
                <p>${album.texto}</p>
                <a href="#" id="card-button${index}" class="card-button">OUÇA AGORA</a>
            </div>
            <dialog id="music-dialog${index}" class="dialog-musica">
            <div class="player">
                <span class="close">&times;</span>
                <div class="player-content">
                    <img src="${caminho_img + album.imagem}" class="player-img">
                    <div class="song-info">
                        <h3>${album.nome}</h3>
                        <p>Ritmos do Sul</p>
                    </div>
                </div>
                <div class="custom-audio-player">
                    <button class="play-pause-btn">
                        <span class="play-icon">&#9658;</span> <!-- ícone de play -->
                        <span class="pause-icon">&#10074;&#10074;</span> <!-- ícone de pause -->
                    </button>
                    <div class="progress-container">
                        <input type="range" class="progress-bar" value="0" max="100" >
                    </div>
                    <span class="current-time">0:00</span>
                    <span class="duration">0:00</span>
                    <input type="range" class="volume-bar" value="100" max="100">
                </div>
                <audio class="audio-element">
                    <source src="${caminho_msc + album.musica}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div class="lyrics-container">
                <h4>Letra da Música:</h4>
                <p>${album.letra}</p>
            </div>
            </dialog>
        `;
    
        albumSection.appendChild(albumClone);
    
        const button = document.getElementById(`card-button${index}`);
        const dialog = document.getElementById(`music-dialog${index}`);
        const closeButton = dialog.querySelector(".close");
        const audio = dialog.querySelector(".audio-element");
    
        button.addEventListener("click", function (e) {
            e.preventDefault();
            dialog.showModal();
        });
    
        closeButton.addEventListener("click", function () {
            dialog.close();
            audio.pause();
            audio.currentTime = 0;
        });

        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) {
                dialog.close();
                audio.pause();
            }
        });
    
        dialog.addEventListener("close", function () {
            audio.pause();
            audio.currentTime = 0;
        });
    
        setupPlayer(dialog);
    });
}

function setupPlayer(dialog) {
    const audioElement = dialog.querySelector('.audio-element');
    const playPauseBtn = dialog.querySelector('.play-pause-btn');
    const progressBar = dialog.querySelector('.progress-bar');
    const currentTimeElement = dialog.querySelector('.current-time');
    const durationElement = dialog.querySelector('.duration');
    const volumeBar = dialog.querySelector('.volume-bar');

    // Atualiza o tempo de duração e a barra de progresso
    audioElement.addEventListener('loadedmetadata', () => {
        const duration = audioElement.duration;
        durationElement.textContent = formatTime(duration);
        progressBar.max = duration;
    });

    // Atualiza o progresso do áudio conforme ele toca
    audioElement.addEventListener('timeupdate', () => {
        const currentTime = audioElement.currentTime;
        progressBar.value = currentTime;
        currentTimeElement.textContent = formatTime(currentTime);

        // Esconde o tempo total e mostra o tempo atual quando a música começa a tocar
        durationElement.style.display = 'none';
        currentTimeElement.style.display = 'inline';
    });

    // Exibe o tempo total e esconde o tempo atual quando a música é pausada ou termina
    audioElement.addEventListener('pause', () => {
        durationElement.style.display = 'inline';
        currentTimeElement.style.display = 'none';
    });

    audioElement.addEventListener('ended', () => {
        durationElement.style.display = 'inline';
        currentTimeElement.style.display = 'none';
    });

    // Controla o play/pause do áudio
    playPauseBtn.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
            playPauseBtn.classList.add('playing');
        } else {
            audioElement.pause();
            playPauseBtn.classList.remove('playing');
        }
    });

    // Atualiza o tempo do áudio conforme a barra de progresso é movida
    progressBar.addEventListener('input', () => {
        audioElement.currentTime = progressBar.value;
    });

    // Controla o volume do áudio
    volumeBar.addEventListener('input', () => {
        audioElement.volume = volumeBar.value / 100;
    });

    // Formata o tempo em mm:ss
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Configura cada player de áudio
    document.querySelectorAll('.dialog-musica').forEach(dialog => {
        setupPlayer(dialog);
    });
});

