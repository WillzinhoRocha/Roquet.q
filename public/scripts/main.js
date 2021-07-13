import Modal from "./modal.js"

const modal = Modal()

//Pegar todos os botôes que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  //Adicionar escuta
  button.addEventListener("click", event => {
    //Abrir modal
    modal.open()
  });
});
