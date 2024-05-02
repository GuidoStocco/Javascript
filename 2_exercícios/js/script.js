// EXERCÍCIOS DE ARRAY E OBJETOS
const arrayNumeros = [1,2,3,4,5];

console.log(arrayNumeros[0]);
console.log(arrayNumeros[2]);
console.log(arrayNumeros[3]);



//
const nome = ["Guido", 24];

const profissao = ["Desenvolvedor", "Prado", true, 24];

console.log(nome.length);
console.log(profissao.length);



//
let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
};

console.log(onibus.rodas);
console.log(onibus.passageiros);
console.log(onibus.portas);

// Adicionando propriedades no onibus
onibus.janelas = 20;
delete onibus.rodas;
console.log(onibus);
console.log(onibus.janelas);



//
const nomes = ["Guido", "ravena", "bel", "katara", "zoe"];

if(nomes.includes("Guido")){
    console.log(`Tem o nome ${nomes[0]}`)
} else {
    console.log("O nome não foi encontrado")
};



//
const arr = [1,2,3,4,5,6];
const arr2 = [1,2,3];

function verificarNumeros(numb) {
    if(numb.length >= 5){
        console.log("Muitos elementos")
    } else {
        console.log("poucos elementos")
    };
};  

verificarNumeros(arr);
verificarNumeros(arr2);



//
const arrayLoop = [0,5,10,15,20];

for(let i = 0; i < arrayLoop.length; i++){
    console.log(arrayLoop[i])
};



//
const jason = {
    "nome": "Guido",
    "idade": 24,
    "profissao": "desenvolvedor"
};

const jason1 = jason;
console.log(jason1.profissao)