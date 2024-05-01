//objetos 
/*
const person = {
    name: "Guido",
    age: 24,
    job: "Programador",
};
console.log(person);
console.log(person.name);
*/
// DELETANDO E CRIANDO PROPRIEDADES
const strada = {
    portas: 2,
    carroceria: true,
    marca: "fiat",
};

console.log(strada);

delete strada.marca
strada.rodas = 4;
console.log(strada);

// MÉTODO ASSIGN copiar propriedades de um obj. para outro
const pessoa = {
    nome: "Guido",
    idade: 24,
};

console.log(pessoa);

const maisSobre = {
    casado: true,
    casa: true
};

Object.assign(pessoa, maisSobre);

console.log(pessoa)

//Verificando as chaves do objeto
const obj = {
    chave1: 1,
    chave2: 2,
    chave3: 3
};

console.log(Object.keys(obj));


// MUTAÇÃO ( MUTABILITY)
const mutacao = {
    prova: 10
};

const mut = mutacao;

const muta = {
    prova: 10
};

console.log(mut == mutacao);
console.log(mut == muta);

// loop em arrays

let numeros = [1,5,10,15,20,25];

for(let i = 0; i <= numeros.length; i++){
    console.log(numeros[i]);
}

// métodos push pra inserir e pop para remover
const nomeCompleto = ["Guido", "Marinho"];

console.log(nomeCompleto);

const ultimoNome = nomeCompleto;

ultimoNome.push("Stocco");

console.log(ultimoNome);

// Métodos unshift para adicionar no inicio e shift para remover

const fruta = ["melao", "maca", "laranja"];
console.log(fruta);
fruta.unshift("pera");
console.log(fruta);

const brand = ["bmw", "fiat", "chevrolet", "vw"];
console.log(brand);
brand.shift();
console.log(brand[0]);


// Métodos indexOf encontra um índice e lastIndexOf o último
const numeroIndex = [1,2,3,4,5];
console.log(numeroIndex.indexOf(3));
console.log(numeroIndex.lastIndexOf(5));


// Método slice retorna um array a partir de outro array
const numeroSlice = [0,1,2,3,4,5,6];
console.log(numeroSlice.slice(2,3));
console.log(numeroSlice.slice(2,4));
console.log(numeroSlice.slice(3));
console.log(numeroSlice.slice(2,-1));


// forEach
const marcaDeCarros = ["bmw", "fiat", "VW", "ferrari"];

marcaDeCarros.forEach(marcaDeCarro => {
    console.log("Nome é " + marcaDeCarro);
});


// Método de array includes
const peixe = ["badejo", "cioba", "cação", "dourado"];

console.log(peixe.includes("badejo"));
console.log(peixe.includes("vermelho"));


//Reverse
const numeros1 = [1,2,3,4,5,6];

console.log(numeros1.reverse());


// Método de string : trim

let nome2 = "   guido";
console.log(nome2);

let nomeCorrigido = nome2.trim();
console.log(nomeCorrigido);


//metodo de string : padStart
const nomeCompleto1 = '1';
console.log(nomeCompleto1.padStart(4, '0'));

const nomeCompleto2 = '1';
console.log(nomeCompleto1.padEnd(4, '0'));


// metodo de string : split
let frase = 'guido marinho stocco';
console.log(frase);

let novaFrase = frase.split(" ");
console.log(novaFrase);


// Método de string : join
const palavra = novaFrase.join('.')
console.log(palavra);


// Metodo de string : repeat
let repetir = 'guido';
console.log(repetir.repeat(5));


// Rest operator definido por três pontos ...
let num = 1;
let num2 = 2;
let num3 = 7;
let num4 = 5;

function imprimirNumeros(...args) {
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    };
};

imprimirNumeros(num, num2, num3, num4);
imprimirNumeros(num2, num4);
imprimirNumeros(2,6,4,3)


// destructuring com objetos
const objDestructuring = {
    nome: "Guido",
    idade: 24,
    profissao: "Desenvolvedor"
};

const {nome: onome, idade: oidade, profissao: oprofissao} = objDestructuring;

console.log(onome);
console.log(oidade);
console.log(oprofissao);


// Destructuring com array
let numerosDestructuring = [1,3,5,7];

let [numb1, numb2, numb3, numb4] = numerosDestructuring;
 
console.log(numb1, numb2);
console.log(numb3);
console.log(numb4);


// JSON
let person = {
    "nome": "ravena",
    "idade": 24,
    "cabelo": "cacheado",
    "idioma": ["Português", "ingles"]
};

console.log(person.nome);
console.log(person.idade);
console.log(person.cabelo);

console.log(person);

//JSON PARA STRING / STRING PARA JSON
let personToText = JSON.stringify(person);
console.log(personToText);

let personJson = JSON.parse(personToText);
console.log(personJson);
console.log(personJson.idioma[1]);