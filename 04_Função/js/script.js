// Funções
/*
// CRIANDO UMA FUNÇÃO
function minhaFuncao () {
    console.log("Testando");
};

minhaFuncao();

function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Imprimindo alguma coisa");

// RETURN

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b);
console.log(resultado);

console.log(soma(c, d));

// ESCOPO

let y = 10;

function testandoEscopo(){
    let y = 20;
    console.log(`Y dentro da função é: ${y}`);
}

testandoEscopo();

console.log(`Y fora da função é: ${y}`);

testandoEscopo();

// ESCOPO ANINHADO

let m = 10;

function escopoAninhado(){
    let m = 20

    if(true){
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado();

console.log(m);


// ARROW FUNCTION

const testeArrow = () => {
    console.log("esta é uma arrow function");
}

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("par");
        return;
    }

    console.log("impar");
};

parOuImpar(5);
parOuImpar(10);

// MAIS SOBRE ARROW FUNCTION

const raizQuadrada = (x) => {
    return x * x;
};

console.log(raizQuadrada(5));

*/

// 
function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log("Pode dirigir")
    } else(
        console.log("Não pode dirigir")
    )
};

console.log(podeDirigir(19,true));
console.log(podeDirigir(19,0));
console.log(podeDirigir(19,1));


//
let numb = 7;

function imprimir(x,y){
    let numb = x + y;

    if(numb > 10){
        let numb = 11;
        numb++

        console.log(numb)
    }
    console.log(numb)
}

console.log(numb)

imprimir(3,9);
