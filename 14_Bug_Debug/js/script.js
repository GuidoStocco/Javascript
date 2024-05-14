// Strick mode para deixar o código mais rigoso e melhor
"use strick" // assim no top do arquivo


// Método de debug: console.log
let a = 1;
let b = 2;

if(a == 1){
    a = b + 2;
}
console.log(a)

for(let i = 0; i < b; i++){
    a = a + 2;
}
console.log(a)


//debugger



// Tratamento de input por função
function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log("Por favor, passe só números para o programa")
    }else {
        return number;
    }
};

checarNumero(5);
checarNumero("guido");


// Try e catch


//assertion