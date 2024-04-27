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


//