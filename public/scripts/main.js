import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalButton = document.getElementById("modal-button");

//Pegar todos os botões que existem com a classe check.
const checkButton = document.querySelectorAll(".actions a.check");

checkButton.forEach((button) => {
  //Adicionar a esculta.
  button.addEventListener("click", handleclick);
});

/*Quando o botão delete for clicado ele abre a modal */

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => handleclick(event, false));
});

function handleclick(event, check = true) {
  event.preventDefault();
  const text = check ? "Marcar como lida" : "Excluir";
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector("#room-id").dataset.id;
  const questionId = event.target.dataset.id;

  const form = document.querySelector(".modal form");
  form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
  check
    ? modalButton.classList.remove("red")
    : modalButton.classList.add("red");

  // Abrir modal.
  modal.open();
}
