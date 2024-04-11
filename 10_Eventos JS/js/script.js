// 1- Adicionando Eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function(){
    console.log("Clicou Aqui")
});


// Removendo o Evento
const secondBtn = document.querySelector("#btn");

function imprimiMensagem(){
    console.log("teste")
};

secondBtn.addEventListener("click", imprimiMensagem);
//
const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimiMensagem)
});