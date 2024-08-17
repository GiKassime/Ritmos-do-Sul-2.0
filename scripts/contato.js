// Referências aos elementos
const dialog = document.getElementById("contactDialog");
const openBtn = document.getElementById("openDialogBtn");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("contactForm");
const aviso = document.querySelector("#avisoDialog");

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
avisoDialog.addEventListener("click", (event) => {
  if (event.target === avisoDialog) {
    avisoDialog.close();
  }
});

// Tratar envio do formulário
 document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário
  var integrante = document.getElementById("integrante-escolhido").value;
  var nome = document.getElementById("nome").value;
  var mensagem = "Formulário enviado de "+nome+" com sucesso para <span>" + integrante + "</span>!";
  document.getElementById("aviso").innerHTML = mensagem;
  dialog.close(); // Fecha a dialog de contato
  document.getElementById("avisoDialog").showModal(); // Abre a dialog de aviso
  avisoDialog.InnerHtml = "<p>Formulário Enviado!</p>"
  document.getElementById("contactForm").reset();
});

// Fecha a dialog de aviso
document.getElementById("fecharAvisoDialog").addEventListener("click", function() {
  document.getElementById("avisoDialog").close();
});
