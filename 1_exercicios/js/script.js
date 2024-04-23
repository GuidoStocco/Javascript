// ARMAZENANDO VALORES STRING, NUMBER, BOOLEAN
/*
let nami = "Guido";
let age = 24;
let gs = true;

console.log(typeof nami);
console.log(typeof age);
console.log(typeof gs);


// Uma estrutura com if

let idade = 18

if(idade >= 18){
    console.log("Você pode entrar na balada")
};


// criando uma constante
const nome = "Guido";

if(nome == "Guido"){
    console.log(`Olá ${nome}, boas vindas`)
};

// Expoente
const numb = 24;

console.log(Math.pow(3,2));
console.log(Math.pow(5,5));
console.log(Math.pow(numb,2));

//armazenando valor
let velo = 90;

if(velo > 80){
    console.log("Você está no limite permitido")
} else{
    console.log("Você está acima do limite permitido")
};
*/

// estrutura de if/else
let idade = 24;
let cnh = true;

if(idade >= 18 && cnh == false){
    console.log("você está dirigindo sem carteira de motorista")
} else if(idade >= 18 && cnh == true){
    console.log("Você é de maior e habilitado!")
} else {
    console.log("você é de menor, e não pode dirigir")
};
