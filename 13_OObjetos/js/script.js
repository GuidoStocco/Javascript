// ORIENTAÇÃO A OBJETOS

// MÉTODOS
const gato = {
    miado: function() {
        console.log("Miauu")
    },
    pulo: function(){
        console.log("Pulou")
    }
};

gato.miado();
gato.pulo();


// MAIS SOBRE MÉTODOS
const cachorro = {
    raca: "SRD",
    latir: function() {
        console.log("au au")
    },
    pulo: function(){
        console.log("Pulou")
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
};

console.log(cachorro.raca);

cachorro.setRaca("Pastor Alemão");

console.log(cachorro.raca);

console.log(cachorro.getRaca())



// PROTOTYPE
const pessoa = {
    pe: 2,
};

console.log(Object.getPrototypeOf(pessoa));


// MAIS SOBRE PROTOTYPE
let carro = {
    porta: 2,
};

let carroNovo = Object.create(carro);

console.log(carroNovo.porta);
console.log(Object.getPrototypeOf(carroNovo) === carro);



// CLASSES
let dog = {
    patas: 4,
    raca: "SRD",
    latir: function (){
        console.log("au au")
    }
};

let labrador = Object.create(dog);

labrador.latir();
labrador.raca = "labrador";

console.log(labrador.raca);
console.log(dog.raca);

let pastor = Object.create(dog); // Outro objecto a partir da classe que aproveita as propriedades do prototype
pastor.raca = "Pastor Alemão";

console.log(pastor.raca);



//Instanciando classes por função
function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
};
let pastorAlemao = criarCachorro("Pastor Alemão", 4, "Marrom");
console.log(pastorAlemao);
console.log(pastorAlemao.cor);



// Classes por 'new'
function Cachorro(raca, cor){
    this.raca = raca;
    this.cor = cor;
};
let husky = new Cachorro("Husky", "laranja");

console.log(husky.raca);
console.log(husky.cor);
console.log(husky);


// Método prototype
function Lobo(raca, cor){
    this.raca = raca;
    this.cor = cor;
};

Lobo.prototype.uivar = function(){
    console.log("auuu");
};

Lobo.prototype.latir = function(){
    console.log("au au");
};


let wolf = new Lobo("Lobo", "preto");
console.log(wolf);
wolf.uivar();
wolf.latir();


// Novo jeito de criar classes com constructor (ES6)
class Gato {
    constructor(raca, patas){
        this.raca = raca;
        this.patas = patas;
    }
};

let gatoRajado = new Gato("Rajado", 4);

console.log(gatoRajado.raca);
console.log(gatoRajado.patas);


// Override nas propriedades do prototype
class Pessoa{
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
};

let cliente = new Pessoa("Guido", 24)

Pessoa.prototype.profissao = "Desenvolvedor";

console.log(cliente);
console.log(Pessoa.prototype.profissao);



// GET E SET 
class Carro{
    constructor(marca, cor){
        this.marca = marca;
        this.cor = cor;
    };

    get nomeMarca() {
        return "A marca é " + this.marca;
    };

    set novaMarca(marca){
        this.marca = marca;
    };
};

let bmw = new Carro("BMW", "Azul");
console.log(bmw.nomeMarca);

bmw.novaMarca = "Fiat"
console.log(bmw.nomeMarca);
//Outro exemplo

class Crianca{
    constructor(nome, peso){
        this.nome = nome;
        this.peso = peso;
    };

    get nomeCrianca(){
        return this.nome;
    };

    set novoNome(nome){
        this.nome = nome;
    };
};

let dante = new Crianca("Dante", 3);
console.log(dante);

dante.novoNome = "Beni";
console.log(dante.nomeCrianca);



//HERANÇA temos que usar o extends
class Lobo1{
    constructor(patas){
        this.patas = patas;
    };
};

class Cachorro1 extends Lobo1{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    };
};

let yorkshire = new Cachorro1(4, 'yorkshire');
console.log(yorkshire);