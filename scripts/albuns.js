const albuns = [
    {
        nome: "Caminhos da vida",
        texto: "Cada faixa é uma jornada emocional, perfeita para quem valoriza a simplicidade e a profundidade dos sentimentos.",
        imagem: "album1.jpg", musica: "caminhosdavida.mp3"
    },
    {
        nome: "Noite de fiesta",
        texto: "Com ritmos contagiantes e letras divertidas, cada faixa é um convite para dançar, brindar e viver momentos inesquecíveis. Perfeito para quem adora se divertir e aproveitar a vida ao máximo.",
        imagem: "album2.jpg", musica: "noitedefiesta.mp3"
    },
    {
        nome: "Perdí mi Corazón",
        texto: "Com letras emocionantes e melodias tocantes, cada faixa mergulha no coração partido e na superação. Ideal para quem busca uma catarse emocional e se identifica com histórias de amor e perda.",
        imagem: "album3.jpg", musica: "perdimicorazon.mp3"
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
        // Cria um novo div para o album com a classe card
        const albumClone = document.createElement('div');
        albumClone.classList.add('card');
    
        // Adiciona o conteúdo do álbum
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
            </dialog>
        `;
    
        // Adiciona o álbum à seção de álbuns
        albumSection.appendChild(albumClone);
    
        // Adiciona eventos de clique para abrir e fechar o diálogo
        const button = document.getElementById(`card-button${index}`);
        const dialog = document.getElementById(`music-dialog${index}`);
        const closeButton = dialog.querySelector(".close");
        const audio = dialog.querySelector(".audio-element");
    
        // Abrir o diálogo quando o botão "Ouça Agora" for clicado
        button.addEventListener("click", function (e) {
            e.preventDefault();
            dialog.showModal();
        });
    
        // Fechar o diálogo e pausar a música quando o ícone "×" for clicado
        closeButton.addEventListener("click", function () {
            dialog.close();
            audio.pause();
            audio.currentTime = 0; // Reinicia a música
        });
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) {
              dialog.close();
              audio.pause();
            }
          });
        // Fechar o diálogo e pausar a música quando o diálogo for fechado
        dialog.addEventListener("close", function () {
            audio.pause();
            audio.currentTime = 0; // Reinicia a música
        });
    
        // Configura o player de música personalizado
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

