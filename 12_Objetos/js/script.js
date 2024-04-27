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

//