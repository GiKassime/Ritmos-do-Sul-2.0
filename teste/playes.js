document.addEventListener("DOMContentLoaded", function() {
    // Adicionando o listener para cada par de botão e diálogo
    const setups = [
        { buttonId: "card-button1", dialogId: "music-dialog1" },
        { buttonId: "card-button2", dialogId: "music-dialog2" },
        { buttonId: "card-button3", dialogId: "music-dialog3" },
        // Adicione mais pares conforme necessário
    ];

    setups.forEach(setup => {
        const button = document.getElementById(setup.buttonId);
        const dialog = document.getElementById(setup.dialogId);
        const closeButton = dialog.querySelector(".close");
        const audio = dialog.querySelector("audio");

        // Abrir o dialog quando o botão "Ouvir Música" for clicado
        button.addEventListener("click", function() {
            dialog.showModal();
        });

        // Fechar o dialog e pausar a música quando o ícone "×" for clicado
        closeButton.addEventListener("click", function() {
            dialog.close();
            audio.pause();
            audio.currentTime = 0; // Opcional: Reinicia a música
        });

        // Fechar o dialog e pausar a música quando o dialog for fechado
        dialog.addEventListener("close", function() {
            audio.pause();
            audio.currentTime = 0; // Opcional: Reinicia a música
        });
    });
});
