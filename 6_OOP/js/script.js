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
/*
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

*/
// CLASSES ES6
/*
class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }
};
const katara = new CachorroClasse('katara', 'yorkshire');
console.log(katara);


// Mais sobre classes

class Carro {
    constructor(eixos, cor) {
        this.eixos = eixos;
        this.cor = cor;
    }

    descriptionCar(){
        console.log(`Este carro tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
};
const Strada = new Carro('6', 'branco');
console.log(Strada);
Strada.descriptionCar();

// OVERRIDE

class Humano {
    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome;
    }
};

const Guido = new Humano('Guido', 24);
console.log(Guido);

Humano.prototype.nome = 'Não Definido';
console.log(Guido.nome);
console.log(Humano.prototype.nome);
*/


// SYMBOL COM CLASSES
/*
class Pc {
    constructor(placa_mae, processador){
        this.placa_mae = placa_mae;
        this.processador = processador;
    }
};
const PastaTermica = Symbol()

Pc.prototype[PastaTermica] = 'Necessario'

const PcGuido = new Pc('ASROCK', 'Ryzen 9 5900x');
console.log(PcGuido);
console.log(PcGuido[PastaTermica]);

// GETTERS E SETTERS

class Post{
    constructor(titulos, descricao, tags){
        this.titulos = titulos;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulos}`;
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(', ')
        this.tags = tagsArray
    }
};
const myPost = new Post('Sobre computadores', 'Melhores processadores');
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, javascrpit, js"
console.log(myPost);
*/

// HERANÇA

class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
};

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas,patas)
        this.nome = nome;
    }
};
const Wolf = new Lobo(4, 'Wolf');
console.log(Wolf);