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
/*
let idade = 24;
let cnh = true;

if(idade >= 18 && cnh == false){
    console.log("você está dirigindo sem carteira de motorista")
} else if(idade >= 18 && cnh == true){
    console.log("Você é de maior e habilitado!")
} else {
    console.log("você é de menor, e não pode dirigir")
};
*/

//loop while de 0 a 10
/*
let numb = 0;

while(numb < 10){
    numb++
    console.log(numb)
}
*/

// loop de 100 a 50
/*
for(let numb = 100; numb >= 50; numb-=2){
    console.log(numb);
};
*/

// loop 
/*
for(let i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(`o numero ${i} é par`)
    } else{
        console.log(`o número ${i} é ímpar`)
    };
};
*/
/*
let a = "123"
let b = 4

console.log("123" + 4)
console.log("123" - 4)
*/


// estrutura de uma função
/*
function nome(){
    console.log("hello world")
};
nome();

//template literals
function age(idade){
    console.log(`Você tem ${idade} anos`)
};

age(24);

//
function imprimindoDoisNumeros(n1, n2){
    return n1 + n2;
};

console.log(imprimindoDoisNumeros(10,24));

// retornar números aleátorios
function retorno(numb){
    return Math.floor(Math.random() * numb) ;
}

console.log(retorno(10));
console.log(retorno(100));
console.log(retorno(1000));

//

function autoEscola(idade){
    if(idade >= 18 ){
        console.log("Você pode fazer auto escola")
    } else {
        console.log("Você não tem idade suficiente")
    };
};

autoEscola(24);
autoEscola(17);

//

function detector(dado){
    if(typeof dado == 'number'){
        console.log("É número")
    } else if(typeof dado == 'boolean'){
        console.log("é um boolean")
    } else if(typeof dado == 'string'){
        console.log("é uma string")
    };
};

detector(24);
detector(true);
detector('guido');
*/
//
/*
function dado(numb){
    return Math.abs(numb)
};

console.log(dado(-24));
console.log(dado(21));
console.log(dado(-24.23));

//

function numeroString(dado){
    if(dado.length > 10 ){
        console.log("Texto muito longo")
    } else{
        console.log("Texto dentro do limite")
    };
    console.log(dado.length)
};

numeroString("teste");
numeroString('Guido marinho');
numeroString('Guidostocco');
*/
/*
function potencia(a,b){
    return Math.pow(a,b)
};

console.log(potencia(3,2));
console.log(potencia(4,3));
console.log(potencia(4,4));
*/
//
/*
function imprimirPar(num){
    for( let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(`Números pares ${i}`)
        };
    };
};

imprimirPar(15);
*/