// Referências aos elementos
const dialog = document.getElementById("contactDialog");
const openBtn = document.getElementById("openDialogBtn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("contactForm");
const outputArea = document.getElementById("outputArea");

// Abrir o dialog
openBtn.addEventListener("click", () => dialog.showModal());

// Fechar o dialog ao clicar no botão de fechar
closeBtn.addEventListener("click", () => dialog.close());

// Fechar o dialog ao clicar fora dele
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

// Tratar envio do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir comportamento padrão do formulário
  dialog.close();
  outputArea.innerHTML = "Formulário enviado!";
  setTimeout(() => {
    outputArea.innerHTML = "";
  }, 5000);
  form.reset();
});
