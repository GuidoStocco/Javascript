//objetos 
const person = {
    name: "Guido",
    age: 24,
    job: "Programador",
};
console.log(person);
console.log(person.name);

// DELETANDO E CRIANDO PROPRIEDADES
const strada = {
    portas: 2,
    carroceria: true,
    marca: "fiat",
};

console.log(strada);

delete strada.marca
console.log(strada);

strada.rodas = 4;

// MÉTODO ASSIGN copiar propriedades de um obj. para outro



