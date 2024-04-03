// MÉTODOS
/*
const animal = {
    nome: 'bob',
    latir: function() {
        console.log('au au');
    }
}
console.log(animal.nome);

animal.latir();

// Aprofundando em métodos

const pessoa = {
    nome: 'guido',
    getNome: function () {
        return this.nome;
    }
}
console.log(pessoa.nome);
console.log(pessoa.getNome());

// PROTOTYPE

const text = 'stocco'

console.log(Object.getPrototypeOf(text));
*/

//CLASSES BASEADAS EM FUNÇÕES CONSTRUTORAS

function criarCachorro(nome, raca)  {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
};

const lessa = criarCachorro ('lessa', 'pastor alemao');
console.log(lessa);

// CLASSES BASEADAS EM FUNÇÕES

function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
};

const husky = new Cachorro('lessa', 'pastor alemao');
console.log(husky);


// CLASSES DE FUNÇÕES COM MÉTODOS
Cachorro.prototype.uivar = function (){
    console.log("Auuuu");
};
console.log(Cachorro.prototype);
husky.uivar();
