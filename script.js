const toggleButton = document.querySelector("#toggle-button");
const form = document.querySelector("#formContact");
const nameContact = document.querySelector("#nameContact");
const telContact = document.querySelector("#telContact");
const perfil = "<span><img src='./images/perfil.png' alt='perfil'></span>";
const names = [];
const tels = [];
let lines = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addLines();
  updateTable();
});

//funçao para o formulario de adicionar contato
toggleButton.addEventListener("click", function () {
  form.classList.toggle("show-form");
});

//funçao para verificar o tamanho do campo de telefone
telContact.addEventListener("input", function () {
  if (this.value.length > 12) {
    this.value = this.value.slice(0, 12);
  }
});

//funcao para adicionar os contatos na tabela
function addLines() {
  if (names.includes(nameContact.value) || tels.includes(telContact.value)) {
    alert(`Nome ou telefone já foram inseridos.`);
  } else {
    names.push(nameContact.value);
    tels.push(telContact.value);

    let line = "<tr>";
    line += `<td>${perfil + nameContact.value}</td>`;
    line += `<td>${"+55" + telContact.value}</td>`;
    line += "</tr>";
    lines += line;
  }

  nameContact.value = "";
  telContact.value = "";
}

function updateTable() {
  const bodyTable = document.querySelector("tbody");
  bodyTable.innerHTML = lines;
}
