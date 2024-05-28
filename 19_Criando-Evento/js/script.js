// Criando Evento

// addEventListener

let btn1 = document.querySelector('.button-1');

function msg(){
    console.log("clicou aqui")
};

btn1.addEventListener("click", msg);


// Removendo o evento
//removeEventListener

let btn2 = document.querySelector(".button-2");

btn2.addEventListener("click", () => {
    btn1.removeEventListener("click", msg)
});



// Objeto do Evento
function msg(e){
    console.log(e)
};


// Evento por tecla (key event)
// keyup e keydown
window.addEventListener("keydown", (e) => {
    
    if(e.key == 's'){
        console.log("Apertou a tecla S")
    };

});