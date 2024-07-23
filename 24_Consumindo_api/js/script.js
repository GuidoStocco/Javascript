// selecionando elementos
const listElement = document.querySelector("#app");

let post = [];


// funções

function nutriApp(){
//querição nativa do js fetch é uma promise
    fetch("//Requisição")
    //recebe uma reposta then para sucesso e catch para falha
    .then((response) => {
        response.json();
    }).then((json) => {
        //recebe o json que a gente colocou em cima, pq ele tbem é uma promesa
        post = json

        post.map((item) => {
            let liElement = document.createElement("li");
            let titleElement = document.createElement("strong");
            

        })
    })
    .catch(() => {
        console.log("Deu algum error")
    })
};

nutriApp();