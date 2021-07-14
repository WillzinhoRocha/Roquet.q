import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector("modal h2");
const modalDescription = document.querySelector("modal p");
const modalButton = document.querySelector("modal button");

//Pegar todos os botões que existem com a classe check.
const checkButton = document.querySelectorAll(".actions a.check");

checkButton.forEach((button) => {
  //Adicionar a esculta.
  button.addEventListener("click", (event) => {
    //Abrir modal
    modal.open();
  });
});

/*Quando o botão delete for clicado ele abre a modal */
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    modal.open();
  });
});
